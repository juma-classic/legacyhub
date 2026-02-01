// Legacy Hub Custom JavaScript
// Trading interface functionality and UI enhancements

class LegacyHubTrader {
    constructor() {
        this.currentBalance = 10013.23;
        this.selectedMultiplier = 10;
        this.stakeAmount = 10.00;
        this.takeProfitEnabled = false;
        this.stopLossEnabled = false;
        this.takeProfitAmount = 0;
        this.stopLossAmount = 0;
        
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
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 16px; height: 48px;">
                <div style="display: flex; align-items: center;">
                    <div class="header__logo">
                        LEGACY HUB
                    </div>
                    <nav class="header__menu">
                        <a href="#" class="header__menu-item">D-BOT</a>
                        <a href="#" class="header__menu-item">Reports</a>
                        <a href="#" class="header__menu-item">Cashier</a>
                    </nav>
                </div>
                <div class="header__account">
                    <div class="header__balance">
                        <span>💰</span>
                        <span class="header__balance-amount" id="balance-display">$${this.currentBalance.toLocaleString('en-US', {minimumFractionDigits: 2})} USD</span>
                    </div>
                    <button class="header__deposit-btn" onclick="legacyTrader.deposit()">
                        Deposit
                    </button>
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
                                <span style="color: #666; font-size: 12px;">VOLATILITY 100 (1s) INDEX</span>
                                <div style="font-size: 16px; font-weight: 700; color: #4bb4b3;">$469.00</div>
                            </div>
                            <div style="font-size: 12px; color: #666;">
                                Last updated: ${new Date().toLocaleTimeString()}
                            </div>
                        </div>
                        <div id="trading-chart-canvas" style="height: calc(100% - 60px); background: #f8f9fa; position: relative;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #666; z-index: 1;">
                                <div style="font-size: 48px; margin-bottom: 16px;">📈</div>
                                <div>Loading Chart...</div>
                                <div style="font-size: 12px; margin-top: 8px;">Volatility 100 (1s) Index</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="trading-sidebar">
                    <div class="trading-controls">
                        <!-- Multipliers -->
                        <div class="control-group">
                            <h3>🔢 Multipliers</h3>
                            <div class="multipliers">
                                <button class="multiplier-btn" data-multiplier="5">x5</button>
                                <button class="multiplier-btn active" data-multiplier="10">x10</button>
                                <button class="multiplier-btn" data-multiplier="25">x25</button>
                                <button class="multiplier-btn" data-multiplier="50">x50</button>
                                <button class="multiplier-btn" data-multiplier="100">x100</button>
                                <button class="multiplier-btn" data-multiplier="250">x250</button>
                            </div>
                        </div>
                        
                        <!-- Scale -->
                        <div class="control-group">
                            <h3>⚖️ Stake</h3>
                            <div class="scale-controls">
                                <input type="number" class="scale-input" id="stake-input" value="${this.stakeAmount}" min="1" step="0.01">
                                <span class="scale-unit">USD</span>
                            </div>
                        </div>
                        
                        <!-- Take Profit / Stop Loss -->
                        <div class="control-group">
                            <h3>🎯 Risk Management</h3>
                            <div class="profit-loss-controls">
                                <div class="control-row">
                                    <input type="checkbox" class="control-checkbox" id="take-profit-check">
                                    <label class="control-label" for="take-profit-check">Take profit</label>
                                    <input type="number" class="control-input" id="take-profit-input" placeholder="0.00" disabled>
                                </div>
                                <div class="control-row">
                                    <input type="checkbox" class="control-checkbox" id="stop-loss-check">
                                    <label class="control-label" for="stop-loss-check">Stop loss</label>
                                    <input type="number" class="control-input" id="stop-loss-input" placeholder="0.00" disabled>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Trading Buttons -->
                        <div class="trading-buttons">
                            <button class="trade-btn trade-btn-up" onclick="legacyTrader.trade('up')">
                                <span>📈</span>
                                <div>
                                    <div>Up</div>
                                    <div class="trade-amount">$${this.stakeAmount.toFixed(2)} USD</div>
                                </div>
                            </button>
                            <button class="trade-btn trade-btn-down" onclick="legacyTrader.trade('down')">
                                <span>📉</span>
                                <div>
                                    <div>Down</div>
                                    <div class="trade-amount">$${this.stakeAmount.toFixed(2)} USD</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    bindEvents() {
        // Multiplier selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('multiplier-btn')) {
                document.querySelectorAll('.multiplier-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.selectedMultiplier = parseInt(e.target.dataset.multiplier);
            }
        });
        
        // Stake amount change
        const stakeInput = document.getElementById('stake-input');
        if (stakeInput) {
            stakeInput.addEventListener('input', (e) => {
                this.stakeAmount = parseFloat(e.target.value) || 0;
                this.updateTradeButtons();
            });
        }
        
        // Take profit checkbox
        const takeProfitCheck = document.getElementById('take-profit-check');
        const takeProfitInput = document.getElementById('take-profit-input');
        if (takeProfitCheck && takeProfitInput) {
            takeProfitCheck.addEventListener('change', (e) => {
                this.takeProfitEnabled = e.target.checked;
                takeProfitInput.disabled = !e.target.checked;
                if (!e.target.checked) takeProfitInput.value = '';
            });
            
            takeProfitInput.addEventListener('input', (e) => {
                this.takeProfitAmount = parseFloat(e.target.value) || 0;
            });
        }
        
        // Stop loss checkbox
        const stopLossCheck = document.getElementById('stop-loss-check');
        const stopLossInput = document.getElementById('stop-loss-input');
        if (stopLossCheck && stopLossInput) {
            stopLossCheck.addEventListener('change', (e) => {
                this.stopLossEnabled = e.target.checked;
                stopLossInput.disabled = !e.target.checked;
                if (!e.target.checked) stopLossInput.value = '';
            });
            
            stopLossInput.addEventListener('input', (e) => {
                this.stopLossAmount = parseFloat(e.target.value) || 0;
            });
        }
    }
    
    updateTradeButtons() {
        const tradeAmounts = document.querySelectorAll('.trade-amount');
        tradeAmounts.forEach(amount => {
            amount.textContent = `$${this.stakeAmount.toFixed(2)} USD`;
        });
    }
    
    updateBalance() {
        const balanceDisplay = document.getElementById('balance-display');
        if (balanceDisplay) {
            balanceDisplay.textContent = `$${this.currentBalance.toLocaleString('en-US', {minimumFractionDigits: 2})} USD`;
        }
    }
    
    trade(direction) {
        if (this.stakeAmount <= 0) {
            alert('Please enter a valid stake amount');
            return;
        }
        
        if (this.stakeAmount > this.currentBalance) {
            alert('Insufficient balance');
            return;
        }
        
        // Simulate trade
        const isWin = Math.random() > 0.5;
        const payout = this.stakeAmount * this.selectedMultiplier;
        
        if (isWin) {
            this.currentBalance += payout - this.stakeAmount;
            this.showNotification(`Trade Won! +$${(payout - this.stakeAmount).toFixed(2)}`, 'success');
        } else {
            this.currentBalance -= this.stakeAmount;
            this.showNotification(`Trade Lost! -$${this.stakeAmount.toFixed(2)}`, 'error');
        }
        
        this.updateBalance();
        
        console.log(`Trade ${direction.toUpperCase()}: ${isWin ? 'WIN' : 'LOSS'}`);
        console.log(`Stake: $${this.stakeAmount}, Multiplier: x${this.selectedMultiplier}`);
        console.log(`New Balance: $${this.currentBalance.toFixed(2)}`);
    }
    
    deposit() {
        const amount = prompt('Enter deposit amount:');
        if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
            this.currentBalance += parseFloat(amount);
            this.updateBalance();
            this.showNotification(`Deposited $${parseFloat(amount).toFixed(2)}`, 'success');
        }
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