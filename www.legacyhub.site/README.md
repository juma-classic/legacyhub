# Legacy Hub Trading Platform

A modern, responsive trading platform built on top of the Deriv framework with custom branding and enhanced user interface.

## Features

### 🏛️ Branding
- Custom "Legacy Hub" branding with professional logo
- Consistent color scheme throughout the platform
- Modern, clean interface design

### 📈 Trading Interface
- Real-time price simulation for Volatility 100 (1s) Index
- Interactive chart with grid lines and price indicators
- Live price updates with color-coded changes

### 🔢 Trading Controls
- Multiple multiplier options (x5, x10, x25, x50, x100, x250)
- Customizable stake amounts
- Risk management tools (Take Profit / Stop Loss)
- Up/Down trading buttons with real-time amounts

### 💰 Account Management
- Live balance display
- Deposit functionality
- Transaction notifications
- Balance updates after trades

### 📱 Responsive Design
- Mobile-friendly layout
- Adaptive sidebar for smaller screens
- Touch-friendly controls

## File Structure

```
www.legacyhub.site/
├── index.html                 # Landing page
├── dtrader.html              # Main trading platform
├── css/
│   └── legacy-hub-custom.css # Custom styles
├── js/
│   ├── legacy-hub-custom.js  # Main trading logic
│   └── chart-simulator.js    # Chart simulation
└── README.md                 # This file
```

## Key Components

### Header Navigation
- Legacy Hub logo and branding
- Navigation menu (D-BOT, Reports, Cashier)
- Account balance display
- Deposit button

### Trading Chart
- Simulated real-time price data
- Interactive canvas-based chart
- Price history visualization
- Current price indicator

### Trading Sidebar
- Multiplier selection
- Stake amount input
- Risk management controls
- Trading execution buttons

## Customization

### Colors
The platform uses CSS custom properties for easy theming:

```css
:root {
    --legacy-primary: #ff6444;    /* Primary brand color */
    --legacy-secondary: #1a1a1a;  /* Secondary text */
    --legacy-accent: #00a8cc;     /* Accent color */
    --legacy-success: #4bb4b3;    /* Success/profit color */
    --legacy-danger: #ec3f3f;     /* Danger/loss color */
}
```

### Trading Logic
The trading simulation includes:
- Random win/loss outcomes
- Multiplier-based payouts
- Balance management
- Trade notifications

## Browser Support
- Modern browsers with ES6+ support
- Canvas API for chart rendering
- CSS Grid and Flexbox support

## Getting Started

1. Open `index.html` for the landing page
2. Click "Launch Trading Platform" to access the main interface
3. Use the trading controls to simulate trades
4. Monitor balance changes and notifications

## Development Notes

- Built on top of existing Deriv framework
- Custom CSS overrides default styles
- JavaScript handles all trading simulation
- Chart uses HTML5 Canvas for performance
- Responsive design adapts to different screen sizes

## Future Enhancements

- Real market data integration
- Advanced charting tools
- Multiple trading instruments
- User authentication
- Trade history
- Portfolio management