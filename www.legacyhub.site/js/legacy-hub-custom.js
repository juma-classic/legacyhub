// Legacy Hub Custom JavaScript - AGGRESSIVE OVERRIDE
// Force Legacy Hub interface to display with navigation menu

(function() {
    'use strict';
    
    // Immediately inject our styles to override everything
    const style = document.createElement('style');
    style.textContent = `
        /* Force hide all original Deriv elements */
        .initial-loader, .initial-loader__loading, .barspinner,
        .header__menu, .header__platform-switcher, .header__deriv-logo,
        .app-contents__loading .initial-loader {
            display: none !important;
            visibility: hidden !important;
        }
        
        /* Force our header styles */
        .legacy-hub-header {
            background: #ffffff !important;
            border-bottom: 1px solid #d6dadb !important;
            height: 60px !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 10000 !important;
            display: flex !important;
            align-items: center !important;
            padding: 0 20px !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }
        
        /* Navigation menu styles */
        .legacy-nav-menu {
            display: flex !important;
            align-items: center !important;
            gap: 30px !important;
            margin-left: 40px !important;
        }
        
        .legacy-nav-item {
            color: #333 !important;
            text-decoration: none !important;
            font-weight: 500 !important;
            font-size: 14px !important;
            padding: 8px 16px !important;
            border-radius: 4px !important;
            transition: all 0.2s ease !important;
        }
        
        .legacy-nav-item:hover {
            background: #f5f5f5 !important;
            color: #ff6444 !important;
        }
        
        .legacy-nav-item.active {
            background: #ff6444 !important;
            color: white !important;
        }
        
        /* Adjust main content for header */
        .app-contents, .app-contents__loading {
            margin-top: 60px !important;
            height: calc(100vh - 97px) !important;
        }
    `;
    document.head.appendChild(style);
    
    class LegacyHubTrader {
        constructor() {
            this.currentBalance = 10013.23;
            this.selectedGrowthRate = '3%';
            this.stakeAmount = 10.00;
            this.takeProfitEnabled = false;
            this.takeProfitAmount = 0;
            this.maxPayout = 0;
            
            this.forceInit();
        }
        
        forceInit() {
            // Immediate initialization
            this.init();
            
            // Multiple retry attempts
            setTimeout(() => this.init(), 100);
            setTimeout(() => this.init(), 500);
            setTimeout(() => this.init(), 1000);
            setTimeout(() => this.init(), 2000);
            setTimeout(() => this.init(), 3000);
            
            // Watch for DOM changes and re-initialize
            this.setupMutationObserver();
        }
        
        setupMutationObserver() {
            const observer = new MutationObserver(() => {
                if (!document.querySelector('.legacy-hub-header')) {
                    console.log('Legacy Hub header missing, re-initializing...');
                    setTimeout(() => this.init(), 100);
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
        
        init() {
            console.log('🏛️ Initializing Legacy Hub interface...');
            this.createNavigationHeader();
            this.createTradingInterface();
            this.bindEvents();
        }
        
        createNavigationHeader() {
            // Remove existing header if present
            const existingHeader = document.querySelector('.legacy-hub-header');
            if (existingHeader) {
                existingHeader.remove();
            }
            
            // Create our complete header with navigation
            const header = document.createElement('div');
            header.className = 'legacy-hub-header';
            header.innerHTML = `
                <!-- Logo Section -->
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div style="font-weight: bold; font-size: 18px; color: #1a1a1a; display: flex; align-items: center; gap: 8px;">
                        🏛️ <span style="color: #ff6444;">LEGACY</span> HUB
                    </div>
                    
                    <!-- Social Media Icons -->
                    <div style="display: flex; align-items: center; gap: 6px; margin-left: 12px;">
                        <a href="#" style="width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; text-decoration: none; background: #1877f2;">f</a>
                        <a href="#" style="width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; text-decoration: none; background: #1da1f2;">t</a>
                        <a href="#" style="width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; text-decoration: none; background: #0088cc;">T</a>
                        <a href="#" style="width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; text-decoration: none; background: #e4405f;">i</a>
                    </div>
                </div>
                
                <!-- Navigation Menu -->
                <nav class="legacy-nav-menu">
                    <a href="/dtrader.html" class="legacy-nav-item active">📈 Trader</a>
                    <a href="#" class="legacy-nav-item">🤖 D-BOT</a>
                    <a href="#" class="legacy-nav-item">📊 SmartTrader</a>
                    <a href="#" class="legacy-nav-item">💰 Binary Bot</a>
                    <a href="#" class="legacy-nav-item">📱 Mobile</a>
                    <a href="#" class="legacy-nav-item">🎓 Academy</a>
                </nav>
                
                <!-- Right Side Actions -->
                <div style="margin-left: auto; display: flex; align-items: center; gap: 12px;">
                    <!-- Language Selector -->
                    <select style="border: 1px solid #ddd; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                        <option>🇺🇸 EN</option>
                        <option>🇪🇸 ES</option>
                        <option>🇫🇷 FR</option>
                    </select>
                    
                    <!-- Account Balance (shown after login) -->
                    <div id="user-balance" style="display: none; font-weight: 600; color: #4bb4b3; font-size: 14px;">
                        $10,013.23
                    </div>
                    
                    <!-- Auth Buttons -->
                    <div id="auth-buttons">
                        <button onclick="legacyTrader.showLogin()" style="background: none; border: 1px solid #ddd; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; margin-right: 8px;">
                            Log in
                        </button>
                        <button onclick="legacyTrader.showSignup()" style="background: #ff6444; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;">
                            Sign up
                        </button>
                    </div>
                    
                    <!-- User Menu (shown after login) -->
                    <div id="user-menu" style="display: none;">
                        <button style="background: #4bb4b3; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; margin-right: 8px;">
                            Deposit
                        </button>
                        <button onclick="legacyTrader.showUserMenu()" style="background: none; border: 1px solid #ddd; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;">
                            Account ▼
                        </button>
                    </div>
                </div>
            `;
            
            // Insert at the very beginning of body
            document.body.insertBefore(header, document.body.firstChild);
            
            console.log('✅ Legacy Hub header with navigation created');
        }
    
        createTradingInterface() {
            const appContents = document.querySelector('.app-contents__loading') || document.querySelector('.app-contents');
            if (!appContents) return;
            
            // Force clear and style the container
            appContents.innerHTML = '';
            appContents.className = 'app-contents';
            appContents.style.cssText = `
                margin-top: 60px !important;
                height: calc(100vh - 97px) !important;
                overflow: hidden !important;
            `;
            
            appContents.innerHTML = `
                <div style="display: flex; height: 100%; background: #ffffff;">
                    <div style="flex: 1; padding: 0; background: #f8f9fa; position: relative;">
                        <div style="height: 100%; background: #f8f9fa; position: relative; border: none;">
                            <div style="padding: 12px 16px; background: #ffffff; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #d6dadb; position: absolute; top: 0; left: 0; right: 0; z-index: 10;">
                                <div style="font-weight: 600; color: #333333; font-size: 14px;">
                                    <div style="color: #666; font-size: 12px; font-weight: normal;">Volatility 100 (1s) Index</div>
                                    <div class="symbol-price" style="font-size: 16px; font-weight: 700; color: #4bb4b3; margin-top: 2px;">
                                        1695.39 <span style="color: #ec3f3f; font-size: 12px;">▼ -0.56 (-0.03%)</span>
                                    </div>
                                </div>
                                <div style="font-size: 12px; color: #666;">Last updated: ${new Date().toLocaleTimeString()}</div>
                            </div>
                            <div id="trading-chart-canvas" style="height: calc(100% - 60px); margin-top: 60px; background: #f8f9fa; position: relative;"></div>
                        </div>
                    </div>
                    <div style="width: 320px; background: #ffffff; border-left: 1px solid #d6dadb; padding: 16px; overflow-y: auto;">
                        <div style="background: #ffffff; border: 1px solid #d6dadb; border-radius: 8px; margin-bottom: 16px;">
                            <div style="padding: 12px 16px; border-bottom: 1px solid #d6dadb; font-weight: 600; font-size: 14px; color: #333333; display: flex; align-items: center; gap: 8px;">
                                📊 Accumulators
                            </div>
                            <div style="padding: 16px;">
                                <div style="margin-bottom: 20px;">
                                    <label style="font-size: 12px; color: #666; margin-bottom: 8px; display: block;">Growth rate</label>
                                    <div style="display: flex; gap: 4px; margin-bottom: 12px;">
                                        <button class="growth-rate-btn" data-rate="1%" style="flex: 1; padding: 6px 8px; border: 1px solid #d6dadb; background: #ffffff; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer; text-align: center;">1%</button>
                                        <button class="growth-rate-btn" data-rate="2%" style="flex: 1; padding: 6px 8px; border: 1px solid #d6dadb; background: #ffffff; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer; text-align: center;">2%</button>
                                        <button class="growth-rate-btn active" data-rate="3%" style="flex: 1; padding: 6px 8px; border: 1px solid #ff6444; background: #ff6444; color: #ffffff; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer; text-align: center;">3%</button>
                                        <button class="growth-rate-btn" data-rate="4%" style="flex: 1; padding: 6px 8px; border: 1px solid #d6dadb; background: #ffffff; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer; text-align: center;">4%</button>
                                        <button class="growth-rate-btn" data-rate="5%" style="flex: 1; padding: 6px 8px; border: 1px solid #d6dadb; background: #ffffff; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer; text-align: center;">5%</button>
                                    </div>
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <label style="font-size: 12px; color: #666; margin-bottom: 8px; display: block;">Stake</label>
                                    <div style="display: flex; align-items: center; border: 1px solid #d6dadb; border-radius: 4px; overflow: hidden;">
                                        <input type="number" class="stake-input" id="stake-input" value="${this.stakeAmount}" min="1" step="0.01" style="flex: 1; padding: 8px 12px; border: none; font-size: 14px; outline: none;">
                                        <span style="padding: 8px 12px; background: #f2f3f4; font-size: 12px; color: #666; border-left: 1px solid #d6dadb;">USD</span>
                                    </div>
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                                        <input type="checkbox" id="take-profit-check" style="width: 16px; height: 16px;">
                                        <label for="take-profit-check" style="font-size: 12px; color: #333333; flex: 1;">Take profit</label>
                                    </div>
                                    <div style="display: flex; gap: 8px;">
                                        <input type="number" id="max-payout-input" placeholder="Max. payout" disabled style="flex: 1; padding: 6px 8px; border: 1px solid #d6dadb; border-radius: 4px; font-size: 12px;">
                                        <input type="number" id="take-profit-input" placeholder="Take profit" disabled style="flex: 1; padding: 6px 8px; border: 1px solid #d6dadb; border-radius: 4px; font-size: 12px;">
                                    </div>
                                </div>
                                <button onclick="legacyTrader.trade()" style="width: 100%; background: #4bb4b3; color: #ffffff; border: none; padding: 12px 16px; border-radius: 4px; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s ease;">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Initialize chart
            setTimeout(() => {
                const chartContainer = document.getElementById('trading-chart-canvas');
                if (chartContainer && !window.chartSimulator) {
                    window.chartSimulator = new ChartSimulator('trading-chart-canvas');
                }
            }, 500);
            
            console.log('✅ Trading interface created');
        }
        
        bindEvents() {
            // Growth rate selection
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('growth-rate-btn')) {
                    document.querySelectorAll('.growth-rate-btn').forEach(btn => {
                        btn.style.background = '#ffffff';
                        btn.style.color = '#333';
                        btn.style.borderColor = '#d6dadb';
                    });
                    e.target.style.background = '#ff6444';
                    e.target.style.color = '#ffffff';
                    e.target.style.borderColor = '#ff6444';
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
        
        showUserMenu() {
            const modal = this.createModal('Account Menu', `
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button style="
                        padding: 12px 16px; border: 1px solid #d6dadb;
                        background: #ffffff; border-radius: 4px; cursor: pointer;
                        text-align: left; font-size: 14px;
                    " onclick="legacyTrader.showAccountSettings()">⚙️ Account Settings</button>
                    
                    <button style="
                        padding: 12px 16px; border: 1px solid #d6dadb;
                        background: #ffffff; border-radius: 4px; cursor: pointer;
                        text-align: left; font-size: 14px;
                    " onclick="legacyTrader.showTransactionHistory()">📊 Transaction History</button>
                    
                    <button style="
                        padding: 12px 16px; border: 1px solid #d6dadb;
                        background: #ffffff; border-radius: 4px; cursor: pointer;
                        text-align: left; font-size: 14px;
                    " onclick="legacyTrader.logout()">🚪 Logout</button>
                    
                    <button type="button" onclick="legacyTrader.closeModal()" style="
                        padding: 8px 16px; border: 1px solid #d6dadb;
                        background: #f5f5f5; border-radius: 4px; cursor: pointer;
                        margin-top: 8px;
                    ">Close</button>
                </div>
            `);
        }
        
        showAccountSettings() {
            this.showNotification('Account settings feature coming soon!', 'info');
            this.closeModal();
        }
        
        showTransactionHistory() {
            this.showNotification('Transaction history feature coming soon!', 'info');
            this.closeModal();
        }
        
        logout() {
            this.showNotification('Logged out successfully', 'info');
            this.closeModal();
            
            // Reset header to logged out state
            const authButtons = document.getElementById('auth-buttons');
            const userMenu = document.getElementById('user-menu');
            const userBalance = document.getElementById('user-balance');
            
            if (authButtons) authButtons.style.display = 'block';
            if (userMenu) userMenu.style.display = 'none';
            if (userBalance) userBalance.style.display = 'none';
        }
        
        updateHeaderForLoggedInUser(email) {
            const authButtons = document.getElementById('auth-buttons');
            const userMenu = document.getElementById('user-menu');
            const userBalance = document.getElementById('user-balance');
            
            if (authButtons) authButtons.style.display = 'none';
            if (userMenu) userMenu.style.display = 'block';
            if (userBalance) {
                userBalance.style.display = 'block';
                userBalance.textContent = `$${this.currentBalance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            }
        }
        
        updateBalance() {
            const balanceDisplay = document.getElementById('user-balance');
            if (balanceDisplay) {
                balanceDisplay.textContent = `$${this.currentBalance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            }
        }
    
        trade() {
            if (this.stakeAmount <= 0) {
                this.showNotification('Please enter a valid stake amount', 'error');
                return;
            }
            
            if (this.stakeAmount > this.currentBalance) {
                this.showNotification('Insufficient balance', 'error');
                return;
            }
            
            // Simulate accumulator trade
            const growthRateValue = parseFloat(this.selectedGrowthRate.replace('%', '')) / 100;
            const isWin = Math.random() > 0.3; // 70% win rate for demo
            
            if (isWin) {
                const profit = this.stakeAmount * (1 + growthRateValue) - this.stakeAmount;
                this.currentBalance += profit;
                this.showNotification(`Trade Won! +$${profit.toFixed(2)}`, 'success');
            } else {
                this.currentBalance -= this.stakeAmount;
                this.showNotification(`Trade Lost! -$${this.stakeAmount.toFixed(2)}`, 'error');
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
                top: 80px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 4px;
                color: white;
                font-weight: 500;
                z-index: 10001;
                animation: slideIn 0.3s ease;
                background: ${type === 'success' ? '#4bb4b3' : type === 'error' ? '#ec3f3f' : '#00a8cc'};
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    }
})();

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