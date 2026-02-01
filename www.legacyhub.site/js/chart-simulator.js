// Volatility 100 (1s) Index Chart Simulator for Legacy Hub
// Creates a realistic line chart with filled area matching the actual interface

class ChartSimulator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.canvas = null;
        this.ctx = null;
        this.data = [];
        this.currentPrice = 1695.39; // Match actual Volatility 100 price
        this.isRunning = false;
        this.chartColor = '#85ACB0'; // Match actual chart color
        this.fillColor = 'rgba(133, 172, 176, 0.1)'; // Light fill under line
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.background = '#f8f9fa';
        
        this.ctx = this.canvas.getContext('2d');
        
        // Clear container and add canvas
        this.container.innerHTML = '';
        this.container.appendChild(this.canvas);
        
        // Generate initial data with downward trend
        this.generateInitialData();
        
        // Start simulation
        this.start();
        
        // Handle resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    generateInitialData() {
        const points = 120;
        let price = 1696.50; // Start slightly higher for downward trend
        
        for (let i = 0; i < points; i++) {
            // Create downward trend with volatility
            const trendFactor = -0.02; // Slight downward trend
            const volatility = (Math.random() - 0.5) * 3; // Reduced volatility for realism
            const change = trendFactor + volatility;
            
            price += change;
            price = Math.max(1690, Math.min(1700, price)); // Realistic Volatility 100 range
            
            this.data.push({
                price: price,
                time: Date.now() - (points - i) * 1000,
                volume: Math.random() * 100
            });
        }
        
        this.currentPrice = price;
        this.updatePriceDisplay();
    }
    
    addDataPoint() {
        // Create realistic Volatility 100 price movement with slight downward bias
        const trendFactor = -0.01; // Slight downward trend
        const volatility = (Math.random() - 0.5) * 2.5; // Realistic volatility
        const change = trendFactor + volatility;
        
        this.currentPrice += change;
        this.currentPrice = Math.max(1690, Math.min(1700, this.currentPrice)); // Realistic bounds
        
        this.data.push({
            price: this.currentPrice,
            time: Date.now(),
            volume: Math.random() * 100
        });
        
        // Keep only last 120 points for smooth scrolling
        if (this.data.length > 120) {
            this.data.shift();
        }
        
        // Update price display
        this.updatePriceDisplay();
    }
    
    updatePriceDisplay() {
        const priceElement = document.querySelector('.symbol-price');
        if (priceElement) {
            const isUp = this.data.length > 1 && 
                        this.currentPrice > this.data[this.data.length - 2].price;
            
            priceElement.textContent = `$${this.currentPrice.toFixed(2)}`;
            priceElement.style.color = isUp ? '#4bb4b3' : '#ec3f3f';
        }
    }
    
    draw() {
        if (!this.ctx || this.data.length < 2) return;
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, width, height);
        
        // Set up drawing context with Legacy Hub colors
        this.ctx.strokeStyle = this.chartColor; // Use #85ACB0 color
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        // Calculate scales
        const minPrice = Math.min(...this.data.map(d => d.price));
        const maxPrice = Math.max(...this.data.map(d => d.price));
        const priceRange = maxPrice - minPrice || 1;
        
        const padding = 20;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        // Draw grid lines (subtle)
        this.drawGrid(padding, chartWidth, chartHeight, minPrice, maxPrice);
        
        // Draw filled area under the line
        this.ctx.fillStyle = this.fillColor;
        this.ctx.beginPath();
        this.data.forEach((point, index) => {
            const x = padding + (index / (this.data.length - 1)) * chartWidth;
            const y = padding + (1 - (point.price - minPrice) / priceRange) * chartHeight;
            
            if (index === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        });
        // Close the path to the bottom
        if (this.data.length > 0) {
            const lastX = padding + chartWidth;
            const firstX = padding;
            this.ctx.lineTo(lastX, padding + chartHeight);
            this.ctx.lineTo(firstX, padding + chartHeight);
            this.ctx.closePath();
        }
        this.ctx.fill();
        
        // Draw price line on top
        this.ctx.strokeStyle = this.chartColor;
        this.ctx.beginPath();
        this.data.forEach((point, index) => {
            const x = padding + (index / (this.data.length - 1)) * chartWidth;
            const y = padding + (1 - (point.price - minPrice) / priceRange) * chartHeight;
            
            if (index === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        });
        this.ctx.stroke();
        
        // Draw current price indicator
        if (this.data.length > 0) {
            const lastPoint = this.data[this.data.length - 1];
            const x = padding + chartWidth;
            const y = padding + (1 - (lastPoint.price - minPrice) / priceRange) * chartHeight;
            
            this.ctx.fillStyle = this.chartColor;
            this.ctx.beginPath();
            this.ctx.arc(x - chartWidth / (this.data.length - 1), y, 3, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
    
    drawGrid(padding, chartWidth, chartHeight, minPrice, maxPrice) {
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; // Very subtle grid
        this.ctx.lineWidth = 1;
        
        // Horizontal grid lines (price levels) - fewer lines
        const priceSteps = 3;
        for (let i = 0; i <= priceSteps; i++) {
            const y = padding + (i / priceSteps) * chartHeight;
            const price = maxPrice - (i / priceSteps) * (maxPrice - minPrice);
            
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(padding + chartWidth, y);
            this.ctx.stroke();
            
            // Price labels (smaller and subtle)
            this.ctx.fillStyle = '#999';
            this.ctx.font = '9px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(price.toFixed(2), padding - 8, y + 3);
        }
        
        // Vertical grid lines (time) - fewer lines
        const timeSteps = 4;
        for (let i = 1; i < timeSteps; i++) {
            const x = padding + (i / timeSteps) * chartWidth;
            
            this.ctx.beginPath();
            this.ctx.moveTo(x, padding);
            this.ctx.lineTo(x, padding + chartHeight);
            this.ctx.stroke();
        }
    }
    
    handleResize() {
        if (!this.container || !this.canvas) return;
        
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.draw();
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.animate();
    }
    
    stop() {
        this.isRunning = false;
    }
    
    animate() {
        if (!this.isRunning) return;
        
        this.addDataPoint();
        this.draw();
        
        // Update every 1-2 seconds for realistic Volatility 100 movement
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => this.animate(), delay);
    }
}

// Initialize chart when DOM is ready and force multiple attempts
function initializeChart() {
    const chartContainer = document.getElementById('trading-chart-canvas');
    if (chartContainer && !window.chartSimulator) {
        console.log('Initializing chart simulator...');
        window.chartSimulator = new ChartSimulator('trading-chart-canvas');
    }
}

// Multiple initialization attempts
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeChart, 1000);
    setTimeout(initializeChart, 2000);
    setTimeout(initializeChart, 3000);
    setTimeout(initializeChart, 5000);
});

// Also try immediately if DOM is already ready
if (document.readyState !== 'loading') {
    setTimeout(initializeChart, 1000);
    setTimeout(initializeChart, 2000);
    setTimeout(initializeChart, 3000);
}