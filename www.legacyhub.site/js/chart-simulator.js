// Simple Chart Simulator for Legacy Hub
// Creates a basic candlestick-like visualization

class ChartSimulator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.canvas = null;
        this.ctx = null;
        this.data = [];
        this.currentPrice = 469.00;
        this.isRunning = false;
        
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
        
        this.ctx = this.canvas.getContext('2d');
        
        // Clear container and add canvas
        this.container.innerHTML = '';
        this.container.appendChild(this.canvas);
        
        // Generate initial data
        this.generateInitialData();
        
        // Start simulation
        this.start();
        
        // Handle resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    generateInitialData() {
        const points = 100;
        let price = this.currentPrice;
        
        for (let i = 0; i < points; i++) {
            const change = (Math.random() - 0.5) * 10;
            price += change;
            price = Math.max(400, Math.min(600, price)); // Keep within bounds
            
            this.data.push({
                price: price,
                time: Date.now() - (points - i) * 1000,
                volume: Math.random() * 100
            });
        }
        
        this.currentPrice = price;
    }
    
    addDataPoint() {
        const change = (Math.random() - 0.5) * 8;
        this.currentPrice += change;
        this.currentPrice = Math.max(400, Math.min(600, this.currentPrice));
        
        this.data.push({
            price: this.currentPrice,
            time: Date.now(),
            volume: Math.random() * 100
        });
        
        // Keep only last 100 points
        if (this.data.length > 100) {
            this.data.shift();
        }
        
        // Update price display
        this.updatePriceDisplay();
    }
    
    updatePriceDisplay() {
        const priceElement = document.querySelector('.chart-price');
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
        
        // Set up drawing context
        this.ctx.strokeStyle = '#4bb4b3';
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
        
        // Draw grid lines
        this.drawGrid(padding, chartWidth, chartHeight, minPrice, maxPrice);
        
        // Draw price line
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
            
            this.ctx.fillStyle = '#4bb4b3';
            this.ctx.beginPath();
            this.ctx.arc(x - chartWidth / (this.data.length - 1), y, 4, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
    
    drawGrid(padding, chartWidth, chartHeight, minPrice, maxPrice) {
        this.ctx.strokeStyle = '#e0e0e0';
        this.ctx.lineWidth = 1;
        
        // Horizontal grid lines (price levels)
        const priceSteps = 5;
        for (let i = 0; i <= priceSteps; i++) {
            const y = padding + (i / priceSteps) * chartHeight;
            const price = maxPrice - (i / priceSteps) * (maxPrice - minPrice);
            
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(padding + chartWidth, y);
            this.ctx.stroke();
            
            // Price labels
            this.ctx.fillStyle = '#666';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(price.toFixed(2), padding - 5, y + 3);
        }
        
        // Vertical grid lines (time)
        const timeSteps = 5;
        for (let i = 0; i <= timeSteps; i++) {
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
        
        // Update every 1-3 seconds
        const delay = 1000 + Math.random() * 2000;
        setTimeout(() => this.animate(), delay);
    }
}

// Initialize chart when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const chartContainer = document.getElementById('trading-chart-canvas');
        if (chartContainer) {
            new ChartSimulator('trading-chart-canvas');
        }
    }, 2000);
});