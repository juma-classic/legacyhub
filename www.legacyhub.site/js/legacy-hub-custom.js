// Legacy Hub Custom JavaScript
// Match the actual Legacy Hub trading interface
// Override Deriv interface completely

class LegacyHubTrader {
    constructor() {
        this.currentBalance = 10013.23;
        this.selectedGrowthRate = '3%';
        this.stakeAmount = 10.00;
        this.takeProfitEnabled = false;
        this.takeProfitAmount = 0;
        this.maxPayout = 0;
        
        // Force override after page loads
        this.forceInit();
    }
    
    forceInit() {
        // Wait for DOM and then force our interface
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
        
        // Also try after a delay to ensure we override everything
        setTimeout(() => this.init(), 1000);
        setTimeout(() => this.init(), 3000);
        setTimeout(() => this.init(), 5000);
    }
    
    init() {
        console.log('Initializing Legacy Hub interface...');
        this.createHeader();
        this.createTradingInterface();
        this.bindEvents();
        this.updateBalance();
        
        // Hide original Deriv elements that might interfere
        this.hideOriginalElements();
    }
    
    hideOriginalElements() {
        // Hide any original Deriv interface elements
        const elementsToHide = [
            '.initial-loader',
            '.initial-loader__loading',
            '.barspinner',
            '.header__menu',
            '.header__platform-switcher',
            '.header__deriv-logo'
        ];
        
        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el) {
                    el.style.display = 'none';
                }
            });
        });
    }
    
    createHeader() {
        const header = document.querySelector('.header__loading') || document.querySelector('.header');
        if (!header) return;
        
        // Force clear any existing content
        header.innerHTML = '';
        header.className = 'header';
        
        // Apply our styles directly
        header.style.cssText = `
            background: #ffffff !important;
            border-bottom: 1px solid #d6dadb !important;
            height: 48px !important;
            box-shadow: none !important;
            display: flex !important;
            align-items: center !important;
            padding: 0 16px !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1000 !important;
            width: 100% !important;
            box-sizing: border-box !important;
        `;
        
        header.innerHTML = `
            <div class="header__logo" style="
                font-weight: bold;
                font-size: 16px;
                color: #1a1a1a;
                display: flex;
                align-items: center;
                gap: 16px;
            ">
                🏛️ LEGACY HUB
                <div class="header__social" style="display: flex; align-items: center; gap: 8px; margin-left: 8px;">
                    <a href="#" class="header__social-icon facebook" style="
                        width: 24px; height: 24px; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; font-size: 12px;
                        color: white; text-decoration: none; background: #1877f2;
                    ">f</a>
                    <a href="#" class="header__social-icon twitter" style="
                        width: 24px; height: 24px; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; font-size: 12px;
                        color: white; text-decoration: none; background: #1da1f2;
                    ">t</a>
                    <a href="#" class="header__social-icon telegram" style="
                        width: 24px; height: 24px; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; font-size: 12px;
                        color: white; text-decoration: none; background: #0088cc;
                    ">T</a>
                    <a href="#" class="header__social-icon instagram" style="
                        width: 24px; height: 24px; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; font-size: 12px;
                        color: white; text-decoration: none; background: #e4405f;
                    ">i</a>
                </div>
            </div>
            <button class="header__dbot-btn" style="
                background: #1a1a1a; color: #ffffff; border: none;
                padding: 6px 16px; border-radius: 4px; font-weight: 600;
                font-size: 14px; cursor: pointer; margin-left: auto; margin-right: 16px;
            ">D-BOT</button>
            <div class="header__account" style="display: flex; align-items: center; gap: 16px;">
                <div style="display: flex; gap: 8px;">
                    <button onclick="legacyTrader.showLogin()" style="
                        background: none; border: 1px solid #ccc; padding: 4px 12px;
                        border-radius: 4px; font-size: 12px; cursor: pointer;
                    ">Log in</button>
                    <button onclick="legacyTrader.showSignup()" style="
                        background: #ff6444; color: white; border: none;
                        padding: 4px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;
                    ">Sign up</button>
                </div>
            </div>
        `;
    }
    
    createTradingInterface() {
        const appContents = document.querySelector('.app-contents__loading') || document.querySelector('.app-contents');
        if (!appContents) return;
        
        // Force clear and style the container
        appContents.innerHTML = '';
        appContents.className = 'app-contents';
        appContents.style.cssText = `
            margin-bottom: 0 !important;
            overflow: hidden !important;
            margin-top: 48px !important;
            height: calc(100vh - 85px) !important;
        `;
        
        appContents.innerHTML = `
            <div class="trading-interface" style="
                display: flex;
                height: 100%;
                background: #ffffff;
            ">
                <div class="trading-chart" style="
                    flex: 1;
                    padding: 0;
                    background: #f8f9fa;
                    position: relative;
                ">
                    <div class="chart-container" style="
                        height: 100%;
                        background: #f8f9fa;
                        position: relative;
                        border: none;
                    ">
                        <div class="chart-header" style="
                            padding: 12px 16px;
                            background: #ffffff;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            border-bottom: 1px solid #d6dadb;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            z-index: 10;
                        ">
                            <div class="chart-symbol" style="
                                font-weight: 600;
                                color: #333333;
                                font-size: 14px;
                            ">
                                <div class="symbol-name" style="color: #666; font-size: 12px; font-weight: normal;">
                                    Volatility 100 (1s) Index
                                </div>
                                <div class="symbol-price" style="
                                    font-size: 16px;
                                    font-weight: 700;
                                    color: #4bb4b3;
                                    margin-top: 2px;
                                ">
                                    1695.39 <span style="color: #ec3f3f; font-size: 12px;">▼ -0.56 (-0.03%)</span>
                                </div>
                            </div>
                            <div style="font-size: 12px; color: #666;">
                                Last updated: ${new Date().toLocaleTimeString()}
                            </div>
                        </div>
                        <div id="trading-chart-canvas" style="
                            height: calc(100% - 60px);
                            margin-top: 60px;
                            background: #f8f9fa;
                            position: relative;
                        "></div>
                    </div>
                </div>
                <div class="trading-sidebar" style="
                    width: 320px;
                    background: #ffffff;
                    border-left: 1px solid #d6dadb;
                    padding: 16px;
                    overflow-y: auto;
                ">
                    <!-- Accumulators Panel -->
                    <div class="accumulators-panel" style="
                        background: #ffffff;
                        border: 1px solid #d6dadb;
                        border-radius: 8px;
                        margin-bottom: 16px;
                    ">
                        <div class="accumulators-header" style="
                            padding: 12px 16px;
                            border-bottom: 1px solid #d6dadb;
                            font-weight: 600;
                            font-size: 14px;
                            color: #333333;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                        ">
                            📊 Accumulators
                        </div>
                        <div class="accumulators-content" style="padding: 16px;">
                            <!-- Growth Rate -->
                            <div class="growth-rate-section" style="margin-bottom: 20px;">
                                <label class="growth-rate-label" style="
                                    font-size: 12px;
                                    color: #666;
                                    margin-bottom: 8px;
                                    display: block;
                                ">Growth rate</label>
                                <div class="growth-rate-buttons" style="display: flex; gap: 4px; margin-bottom: 12px;">
                                    <button class="growth-rate-btn" data-rate="1%" style="
                                        flex: 1; padding: 6px 8px; border: 1px solid #d6dadb;
                                        background: #ffffff; border-radius: 4px; font-size: 11px;
                                        font-weight: 500; cursor: pointer; text-align: center;
                                    ">1%</button>
                                    <button class="growth-rate-btn" data-rate="2%" style="
                                        flex: 1; padding: 6px 8px; border: 1px solid #d6dadb;
                                        background: #ffffff; border-radius: 4px; font-size: 11px;
                                        font-weight: 500; cursor: pointer; text-align: center;
                                    ">2%</button>
                                    <button class="growth-rate-btn active" data-rate="3%" style="
                                        flex: 1; padding: 6px 8px; border: 1px solid #ff6444;
                                        background: #ff6444; color: #ffffff; border-radius: 4px;
                                        font-size: 11px; font-weight: 500; cursor: pointer; text-align: center;
                                    ">3%</button>
                                    <button class="growth-rate-btn" data-rate="4%" style="
                                        flex: 1; padding: 6px 8px; border: 1px solid #d6dadb;
                                        background: #ffffff; border-radius: 4px; font-size: 11px;
                                        font-weight: 500; cursor: pointer; text-align: center;
                                    ">4%</button>
                                    <button class="growth-rate-btn" data-rate="5%" style="
                                        flex: 1; padding: 6px 8px; border: 1px solid #d6dadb;
                                        background: #ffffff; border-radius: 4px; font-size: 11px;
                                        font-weight: 500; cursor: pointer; text-align: center;
                                    ">5%</button>
                                </div>
                            </div>
                            
                            <!-- Stake -->
                            <div class="stake-section" style="margin-bottom: 20px;">
                                <label class="stake-label" style="
                                    font-size: 12px;
                                    color: #666;
                                    margin-bottom: 8px;
                                    display: block;
                                ">Stake</label>
                                <div class="stake-input-group" style="
                                    display: flex;
                                    align-items: center;
                                    border: 1px solid #d6dadb;
                                    border-radius: 4px;
                                    overflow: hidden;
                                ">
                                    <input type="number" class="stake-input" id="stake-input" 
                                           value="${this.stakeAmount}" min="1" step="0.01" style="
                                        flex: 1;
                                        padding: 8px 12px;
                                        border: none;
                                        font-size: 14px;
                                        outline: none;
                                    ">
                                    <span class="stake-currency" style="
                                        padding: 8px 12px;
                                        background: #f2f3f4;
                                        font-size: 12px;
                                        color: #666;
                                        border-left: 1px solid #d6dadb;
                                    ">USD</span>
                                </div>
                            </div>
                            
                            <!-- Take Profit -->
                            <div class="take-profit-section" style="margin-bottom: 20px;">
                                <div class="take-profit-toggle" style="
                                    display: flex;
                                    align-items: center;
                                    gap: 8px;
                                    margin-bottom: 12px;
                                ">
                                    <input type="checkbox" class="take-profit-checkbox" id="take-profit-check" style="
                                        width: 16px;
                                        height: 16px;
                                    ">
                                    <label class="take-profit-label" for="take-profit-check" style="
                                        font-size: 12px;
                                        color: #333333;
                                        flex: 1;
                                    ">Take profit</label>
                                </div>
                                <div class="take-profit-inputs" style="display: flex; gap: 8px;">
                                    <input type="number" class="take-profit-input" id="max-payout-input" 
                                           placeholder="Max. payout" disabled style="
                                        flex: 1;
                                        padding: 6px 8px;
                                        border: 1px solid #d6dadb;
                                        border-radius: 4px;
                                        font-size: 12px;
                                    ">
                                    <input type="number" class="take-profit-input" id="take-profit-input" 
                                           placeholder="Take profit" disabled style="
                                        flex: 1;
                                        padding: 6px 8px;
                                        border: 1px solid #d6dadb;
                                        border-radius: 4px;
                                        font-size: 12px;
                                    ">
                                </div>
                            </div>
                            
                            <!-- Buy Button -->
                            <button class="buy-button" onclick="legacyTrader.trade()" style="
                                width: 100%;
                                background: #4bb4b3;
                                color: #ffffff;
                                border: none;
                                padding: 12px 16px;
                                border-radius: 4px;
                                font-weight: 600;
                                font-size: 14px;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            ">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize chart after interface is created
        setTimeout(() => {
            const chartContainer = document.getElementById('trading-chart-canvas');
            if (chartContainer && !window.chartSimulator) {
                window.chartSimulator = new ChartSimulator('trading-chart-canvas');
            }
        }, 500);
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
    
    showLogin() {
        const modal = this.createModal('Login to Legacy Hub', `
            <form onsubmit="legacyTrader.handleLogin(event)" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Email</label>
                    <input type="email" id="login-email" required style="
                        width: 100%; padding: 8px 12px; border: 1px solid #d6dadb;
                        border-radius: 4px; font-size: 14px; outline: none;
                    " placeholder="Enter your email">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Password</label>
                    <input type="password" id="login-password" required style="
                        width: 100%; padding: 8px 12px; border: 1px solid #d6dadb;
                        border-radius: 4px; font-size: 14px; outline: none;
                    " placeholder="Enter your password">
                </div>
                <div style="display: flex; gap: 8px; margin-top: 16px;">
                    <button type="button" onclick="legacyTrader.closeModal()" style="
                        flex: 1; padding: 8px 16px; border: 1px solid #d6dadb;
                        background: #ffffff; border-radius: 4px; cursor: pointer;
                    ">Cancel</button>
                    <button type="submit" style="
                        flex: 1; padding: 8px 16px; border: none;
                        background: #ff6444; color: white; border-radius: 4px; cursor: pointer;
                    ">Login</button>
                </div>
            </form>
        `);
    }
    
    showSignup() {
        const modal = this.createModal('Sign up for Legacy Hub', `
            <form onsubmit="legacyTrader.handleSignup(event)" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Email</label>
                    <input type="email" id="signup-email" required style="
                        width: 100%; padding: 8px 12px; border: 1px solid #d6dadb;
                        border-radius: 4px; font-size: 14px; outline: none;
                    " placeholder="Enter your email">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Password</label>
                    <input type="password" id="signup-password" required style="
                        width: 100%; padding: 8px 12px; border: 1px solid #d6dadb;
                        border-radius: 4px; font-size: 14px; outline: none;
                    " placeholder="Create a password">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 12px; color: #666;">Confirm Password</label>
                    <input type="password" id="signup-confirm" required style="
                        width: 100%; padding: 8px 12px; border: 1px solid #d6dadb;
                        border-radius: 4px; font-size: 14px; outline: none;
                    " placeholder="Confirm your password">
                </div>
                <div style="display: flex; gap: 8px; margin-top: 16px;">
                    <button type="button" onclick="legacyTrader.closeModal()" style="
                        flex: 1; padding: 8px 16px; border: 1px solid #d6dadb;
                        background: #ffffff; border-radius: 4px; cursor: pointer;
                    ">Cancel</button>
                    <button type="submit" style="
                        flex: 1; padding: 8px 16px; border: none;
                        background: #ff6444; color: white; border-radius: 4px; cursor: pointer;
                    ">Sign Up</button>
                </div>
            </form>
        `);
    }
    
    createModal(title, content) {
        // Remove existing modal
        const existingModal = document.getElementById('legacy-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        const modal = document.createElement('div');
        modal.id = 'legacy-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 8px;
                padding: 24px;
                width: 400px;
                max-width: 90vw;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            ">
                <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #333;">${title}</h2>
                ${content}
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        return modal;
    }
    
    closeModal() {
        const modal = document.getElementById('legacy-modal');
        if (modal) {
            modal.remove();
        }
    }
    
    handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simulate login
        this.showNotification('Login successful! Welcome to Legacy Hub', 'success');
        this.closeModal();
        
        // Update header to show logged in state
        this.updateHeaderForLoggedInUser(email);
    }
    
    handleSignup(event) {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;
        
        if (password !== confirm) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }
        
        // Simulate signup
        this.showNotification('Account created successfully! Welcome to Legacy Hub', 'success');
        this.closeModal();
        
        // Update header to show logged in state
        this.updateHeaderForLoggedInUser(email);
    }
    
    updateHeaderForLoggedInUser(email) {
        const accountDiv = document.querySelector('.header__account');
        if (accountDiv) {
            accountDiv.innerHTML = `
                <div class="header__balance" style="
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    color: #333333;
                ">
                    Balance: <span class="header__balance-amount" style="
                        font-size: 14px;
                        color: #4bb4b3;
                    " id="balance-display">${this.currentBalance.toLocaleString('en-US', {minimumFractionDigits: 2})} USD</span>
                </div>
                <button class="header__deposit-btn" style="
                    background: #ff6444;
                    color: #ffffff;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                ">Deposit</button>
                <div style="font-size: 12px; color: #666;">${email}</div>
            `;
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

// Initialize when DOM is ready and force override
let legacyTrader;

// Multiple initialization attempts to ensure we override the original interface
function initializeLegacyHub() {
    if (!legacyTrader) {
        legacyTrader = new LegacyHubTrader();
    }
}

// Try immediately
initializeLegacyHub();

// Try when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLegacyHub);
} else {
    initializeLegacyHub();
}

// Force initialization at multiple intervals
setTimeout(initializeLegacyHub, 500);
setTimeout(initializeLegacyHub, 1000);
setTimeout(initializeLegacyHub, 2000);
setTimeout(initializeLegacyHub, 3000);
setTimeout(initializeLegacyHub, 5000);

// Watch for changes and re-initialize if needed
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            // If the original interface tries to load, override it
            const header = document.querySelector('.header__loading, .header');
            const appContents = document.querySelector('.app-contents__loading, .app-contents');
            
            if (header && !header.innerHTML.includes('LEGACY HUB')) {
                console.log('Detected original interface loading, overriding...');
                setTimeout(initializeLegacyHub, 100);
            }
        }
    });
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});