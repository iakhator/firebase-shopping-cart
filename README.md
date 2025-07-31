# 🛒 RingCart

A modern,e-commerce application built with Nuxt.js 3, Firebase, and Stripe. This application provides a complete shopping experience with user authentication, product browsing, cart management, and secure payment processing.

## 🚀 Features

### Core Functionality
- **User Authentication**: Standalone login/registration pages with Firebase Auth
- **Product Catalog**: Browse products with advanced filtering (brand, price, storage)
- **Shopping Cart**: Add, remove, and modify cart items with real-time updates
- **Order Management**: Complete order processing and history tracking
- **Payment Processing**: Secure payments via Stripe integration
- **Email Notifications**: Automated order confirmations and updates

### Technical Features
- **Server-Side Rendering**: Fast initial page loads with Nuxt.js 3
- **Real-time Updates**: Live cart synchronization across sessions
- **Guest Cart**: Cart persistence for non-authenticated users
- **Responsive Design**: Mobile-first approach with Element Plus UI
- **Standalone Auth Pages**: Modern authentication UI with social login options
- **Docker Support**: Containerized deployment ready
- **Redis Caching**: High-performance cart storage

## 🛠 Tech Stack

### Client
- **[Nuxt.js 3](https://nuxt.com/)** - Vue.js SSR framework
- **[Element Plus](https://element-plus.org/)** - Vue 3 component library
- **[Pinia](https://pinia.vuejs.org/)** - State management
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor

### Server
- **[Firebase](https://firebase.google.com/)** - Authentication & Firestore database
- **[Redis](https://redis.io/)** - Cart storage and session management
- **[Stripe](https://stripe.com/)** - Payment processing
- **[Nodemailer](https://nodemailer.com/)** - Email notifications
- **[Mailgun](https://www.mailgun.com/)** - Email Client

### DevOps
- **[Docker](https://www.docker.com/)** - Containerization
- **[Vitest](https://vitest.dev/)** - Unit testing framework

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Redis server
- Firebase project
- Stripe account

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/iakhator/firebase-shopping-cart.git
cd firebase-shopping-cart
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Configure your environment variables** (see Configuration section)

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password
3. Create a Firestore database
4. Set up the following collections:
   - `products` - Product catalog
   - `categories` - Product categories
   - `orders` - Order history
   - `users` - User profiles

### Stripe Setup

1. Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable and secret keys
3. Configure webhooks for order processing

## Usage

### Development

```bash
# Start development server
npm run dev

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build

# Preview production build
npm run start
```

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d
```

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Vue.js and Nuxt.js best practices
- Write tests for new features
- Maintain consistent code style
- Update documentation as needed
- Use semantic versioning

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue on GitHub or contact the maintainers.

---

**Author**: Akhator Itua
**Version**: 2.0.0
**Last Updated**: 2024
