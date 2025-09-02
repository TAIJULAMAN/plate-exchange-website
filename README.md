# Mandhir Hothi Web - UK Number Plate Marketplace

A modern React-based web application for buying and selling UK number plates. This platform connects buyers and sellers in a secure marketplace environment with premium features and user dashboard functionality.

## 🚀 Features

### Core Functionality
- **Buy & Sell Number Plates**: Browse and purchase UK number plates or list your own for sale
- **Plate Valuation**: Get professional valuations for your number plates
- **User Dashboard**: Comprehensive user management with profile, listings, and transaction history
- **Secure Payments**: Integrated payment processing with Stripe
- **Real-time Chat**: Communication system between buyers and sellers
- **Premium Subscriptions**: Tiered pricing plans with enhanced features

### Key Pages
- **Home**: Landing page with featured plates and how-it-works guide
- **Marketplace**: Browse available plates with search and filtering
- **User Authentication**: Login, signup, password reset, and verification
- **User Dashboard**: Profile management, listings, purchases, and communications
- **Legal Pages**: Privacy policy, terms & conditions, and FAQ sections

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with Vite
- **Routing**: React Router DOM v7.8.0
- **State Management**: Redux Toolkit with Redux Persist
- **Styling**: Tailwind CSS v4.1.8
- **UI Components**: Lucide React icons
- **Notifications**: React Hot Toast
- **Authentication**: JWT with decode functionality
- **Payment**: Stripe integration
- **Real-time**: WebSocket support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── Home/           # Landing page components
│   ├── Auth/           # Authentication pages
│   ├── Dashboards/     # User dashboard pages
│   ├── PlateView/      # Plate viewing functionality
│   └── ...
├── routes/             # React Router configuration
├── Redux/              # State management
│   ├── Slice/          # Redux slices
│   └── api/            # API integration
├── Utils/              # Utility functions and hooks
├── assets/             # Static assets
└── layout/             # Layout components
```

## 🔐 Authentication & Authorization

The application includes:
- **Private Routes**: Protected pages requiring authentication
- **Premium Routes**: Features requiring subscription
- **User Verification**: Email/phone verification system
- **Password Reset**: Secure password recovery flow

## 💳 Payment Integration

- Stripe Connect for secure transactions
- Subscription management
- Payment success/failure handling
- Transaction history tracking



## 📄 License

This project is private and proprietary.
---

**Built with ❤️ for the UK number plate community**