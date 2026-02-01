// Legacy Hub Custom JavaScript
// Match the actual Legacy Hub trading interface

class LegacyHubTrader {
    constructor() {
        this.currentBalance = 10013.23;
        this.selectedGrowthRate = '3%';
        this.stakeAmount = 10.00;
        this.takeProfitEnabled = false;
        this.takeProfitAmount = 0;
        this.maxPayout = 0;
        
        this.init();
    }
    
    init() {
        this.createHeader();
        this.createTradingInterface();
        this.bindEvents();
        this.updateBalance();
    }
    
    createHeader() {
        const header = document.querySelector('.header__loading') || document.querySelector('.header');
        if (!header) return;
        
        header.innerHTML = `
            <div class="header__logo">
                LEGACY HUB
                <div class="header__social">
                    <a href="#" class="header__social-icon facebook">f</a>
                    <a href="#" class="header__social-icon twitter">t</a>
                    <a href="#" class="header__social-icon telegram">T</a>
                    <a href="#" class="header__social-icon instagram">i</a>
                </div>
            </div>
            <button class="header__dbot-btn">D-BOT</button>
            <div class="header__account">
                <div style="display: flex; gap: 8px;">
                    <button style="background: none; border: 1px solid #ccc; padding: 4px 12px; border-radius: 4px; font-size: 12px;">Log in</button>
                    <button style="background: #ff6444; color: white; border: none; padding: 4px 12px; border-radius: 4px; font-size: 12px;">Sign up</button>
                </div>
            </div>
        `;
    }
    
    createTradingInterface() {
        const appContents = document.querySelector('.app-contents__loading') || document.querySelector('.app-contents');
        if (!appContents) return;
        
        appContents.innerHTML = `
            <div class="trading-interface">
                <div class="trading-chart">
                    <div class="chart-container">
                        <div class="chart-header">
                            <div class="chart-symbol">
                                <div class="symbol-name">Volatility 100 (1s) Index</div>
                                <div class="symbol-price">1695.39 <span style="color: #ec3f3f; font-size: 12px;">▼ -0.56 (-0.03%)</span></div>
                            </div>
                            <div style="font-size: 12px; color: #666;">
                                Last updated: ${new Date().toLocaleTimeString()}
                            </div>
                        </div>
                        <div id="trading-chart-canvas"></div>
                    </div>
                </div>
                <div class="trading-sidebar">
                    <!-- Accumulators Panel -->
                    <div class="accumulators-panel">
                        <div class="accumulators-header">
                            📊 Accumulators
                        </div>
                        <div class="accumulators-content">
                            <!-- Growth Rate -->
                            <div class="growth-rate-section">
                                <label class="growth-rate-label">Growth rate</label>
                                <div class="growth-rate-buttons">
                                    <button class="growth-rate-btn" data-rate="1%">1%</button>
                                    <button class="growth-rate-btn" data-rate="2%">2%</button>
                                    <button class="growth-rate-btn active" data-rate="3%">3%</button>
                                    <button class="growth-rate-btn" data-rate="4%">4%</button>
                                    <button class="growth-rate-btn" data-rate="5%">5%</button>
                                </div>
                            </div>
                            
                            <!-- Stake -->
                            <div class="stake-section">
                                <label class="stake-label">Stake</label>
                                <div class="stake-input-group">
                                    <input type="number" class="stake-input" id="stake-input" value="${this.stakeAmount}" min="1" step="0.01">
                                    <span class="stake-currency">USD</span>
                                </div>
                            </div>
                            
                            <!-- Take Profit -->
                            <div class="take-profit-section">
                                <div class="take-profit-toggle">
                                    <input type="checkbox" class="take-profit-checkbox" id="take-profit-check">
                                    <label class="take-profit-label" for="take-profit-check">Take profit</label>
                                </div>
                                <div class="take-profit-inputs">
                                    <input type="number" class="take-profit-input" id="max-payout-input" placeholder="Max. payout" disabled>
                                    <input type="number" class="take-profit-input" id="take-profit-input" placeholder="Take profit" disabled>
                                </div>
                            </div>
                            
                            <!-- Buy Button -->
                            <button class="buy-button" onclick="legacyTrader.trade()">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    bindEvents() {
        // Growth rate selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('growth-rate-btn')) {
                document.querySelectorAll('.growth-rate-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.selectedGrowthRate = e.target.dataset.rate;
            }
        });
        
        // Stake amount change
        const stakeInput = document.getElementById('stake-input');
        if (stakeInput) {
            stakeInput.addEventListener('input', (e) => {
                this.stakeAmount = parseFloat(e.target.value) || 0;
            });
        }
        
        // Take profit checkbox
        const takeProfitCheck = document.getElementById('take-profit-check');
        const maxPayoutInput = document.getElementById('max-payout-input');
        const takeProfitInput = document.getElementById('take-profit-input');
        
        if (takeProfitCheck && maxPayoutInput && takeProfitInput) {
            takeProfitCheck.addEventListener('change', (e) => {
                this.takeProfitEnabled = e.target.checked;
                maxPayoutInput.disabled = !e.target.checked;
                takeProfitInput.disabled = !e.target.checked;
                if (!e.target.checked) {
                    maxPayoutInput.value = '';
                    takeProfitInput.value = '';
                }
            });
            
            maxPayoutInput.addEventListener('input', (e) => {
                this.maxPayout = parseFloat(e.target.value) || 0;
            });
            
            takeProfitInput.addEventListener('input', (e) => {
                this.takeProfitAmount = parseFloat(e.target.value) || 0;
            });
        }
    }
    
    updateBalance() {
        const balanceDisplay = document.getElementById('balance-display');
        if (balanceDisplay) {
            balanceDisplay.textContent = `${this.currentBalance.toLocaleString('en-US', {minimumFractionDigits: 2})} USD`;
        }
    }
    
    trade() {
        if (this.stakeAmount <= 0) {
            alert('Please enter a valid stake amount');
            return;
        }
        
        if (this.stakeAmount > this.currentBalance) {
            alert('Insufficient balance');
            return;
        }
        
        // Simulate accumulator trade
        const growthRateValue = parseFloat(this.selectedGrowthRate.replace('%', '')) / 100;
        const isWin = Math.random() > 0.3; // 70% win rate for demo
        
        if (isWin) {
            const profit = this.stakeAmount * (1 + growthRateValue) - this.stakeAmount;
            this.currentBalance += profit;
            this.showNotification(`Trade Won! +${profit.toFixed(2)}`, 'success');
        } else {
            this.currentBalance -= this.stakeAmount;
            this.showNotification(`Trade Lost! -${this.stakeAmount.toFixed(2)}`, 'error');
        }
        
        this.updateBalance();
        
        console.log(`Accumulator Trade: ${isWin ? 'WIN' : 'LOSS'}`);
        console.log(`Stake: ${this.stakeAmount}, Growth Rate: ${this.selectedGrowthRate}`);
        console.log(`New Balance: ${this.currentBalance.toFixed(2)}`);
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 60px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#4bb4b3' : type === 'error' ? '#ec3f3f' : '#00a8cc'};
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
let legacyTrader;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        legacyTrader = new LegacyHubTrader();
    });
} else {
    legacyTrader = new LegacyHubTrader();
}

// Also initialize after a short delay to ensure all elements are loaded
setTimeout(() => {
    if (!legacyTrader) {
        legacyTrader = new LegacyHubTrader();
    }
}, 1000);