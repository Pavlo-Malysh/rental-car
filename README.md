# 🚗 Rental Car - Car Rental Service

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Zustand](https://img.shields.io/badge/Zustand-5.0-orange?style=for-the-badge)

**Modern car rental platform built with Next.js 15, TypeScript, and Server-Side Rendering**

[🌐 Live Demo](https://rental-car-eta-three.vercel.app) • [📖 Documentation](#-table-of-contents) 
</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [📂 Project Structure](#-project-structure)
- [🔌 API Routes](#-api-routes)
- [🎨 Key Components](#-key-components)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎯 Core Features
- **🔍 Advanced Search & Filters** - Filter cars by brand, price, and mileage
- **❤️ Favorites System** - Save your favorite cars with localStorage persistence
- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **⚡ Server-Side Rendering** - SEO-friendly with Next.js SSR
- **🔄 Infinite Scroll** - Load more cars seamlessly with pagination
- **🎨 Modern UI/UX** - Clean and intuitive interface

### 🛡️ Technical Features
- **🔐 API Proxy Server** - Secure API calls through Next.js routes
- **🗂️ State Management** - Zustand for efficient global state
- **📊 Type Safety** - Full TypeScript coverage
- **⚙️ Dynamic Rendering** - Force-dynamic for always fresh data

---

## 🛠️ Tech Stack

### Frontend
- **⚛️ Next.js 15** - React framework with App Router
- **📘 TypeScript** - Type-safe development
- **🎨 CSS Modules** - Scoped styling
- **🖼️ Next/Image** - Optimized image loading

### State & Data
- **🐻 Zustand** - Lightweight state management
- **📡 Axios** - HTTP client for API requests
- **💾 localStorage** - Persistent favorites storage

### Development
- **📦 npm** - Package manager
- **🔧 ESLint** - Code linting
- **🎯 Prettier** - Code formatting

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pavlo-Malysh/rental-car.git
   cd rental-car
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your configuration (see [Environment Variables](#environment-variables))

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env` file in the root directory:

```env
# Local Development
NEXT_PUBLIC_API_URL=http://localhost:3000

# External API
EXTERNAL_API_URL=https://car-rental-api.goit.global
```

**For Vercel Deployment:**
```env
NEXT_PUBLIC_API_URL=https://your-app-name.vercel.app
EXTERNAL_API_URL=https://car-rental-api.goit.global
```

---

## 📂 Project Structure

```
rental-car/
├── 📁 app/                      # Next.js App Router
│   ├── 📁 api/                  # API Routes (Proxy Server)
│   │   ├── 📁 brands/           # GET /api/brands
│   │   ├── 📁 cars/             # GET /api/cars
│   │   │   └── 📁 [id]/         # GET /api/cars/[id]
│   │   └── 📄 api.ts            # External API instance
│   ├── 📁 catalog/              # Catalog page (SSR)
│   │   ├── 📁 [id]/             # Car details page
│   │   └── 📄 page.tsx          # Main catalog page
│   └── 📄 layout.tsx            # Root layout
│
├── 📁 components/               # React components
│   ├── 📁 CarItem/              # Car card component
│   ├── 📁 CarsList/             # Cars list container
│   ├── 📁 Header/               # Navigation header
│   └── 📁 SearchBox/            # Search & filters
│
├── 📁 lib/                      # Utilities & helpers
│   ├── 📁 api/                  # API configuration
│   │   ├── 📄 api.ts            # Axios instances
│   │   ├── 📄 clientApi.ts      # Client-side API calls
│   │   └── 📄 serverApi.ts      # Server-side API calls
│   └── 📁 store/                # Zustand stores
│       └── 📄 carsListStore.ts  # Cars & favorites state
│
├── 📁 types/                    # TypeScript types
│   └── 📄 car.ts                # Car-related types
│
└── 📁 public/                   # Static assets
    ├── 📄 icons.svg             # SVG sprite
    └── 📁 images/               # Images
```

---

## 🔌 API Routes

### Next.js Proxy Server

All API calls go through Next.js API routes for security and CORS handling:

#### `GET /api/brands`
Fetches all available car brands
```typescript
Response: string[]
```

#### `GET /api/cars`
Fetches cars with pagination and filters
```typescript
Query Params:
  - page: number
  - limit: number
  - brand?: string
  - rentalPrice?: string
  - minMileage?: string
  - maxMileage?: string

Response: {
  cars: Car[]
  totalCars: number
  page: number
  totalPages: number
}
```

#### `GET /api/cars/[id]`
Fetches single car details
```typescript
Response: Car
```

### Architecture

```
Browser → Next.js API Routes → External API
   ↓           ↓                    ↓
Client     Proxy Server      car-rental-api.goit.global
```

**Benefits:**
- ✅ No CORS issues
- ✅ API key protection
- ✅ Request logging
- ✅ Error handling

---

## 🎨 Key Components

### 🚙 CarItem
Displays individual car card with:
- Car image with gradient overlay
- Brand, model, year
- Price per hour
- Favorite toggle
- "Read more" link

### 🔍 SearchBox
Advanced filtering with:
- Brand dropdown
- Price range selector
- Mileage range inputs (formatted with commas)
- Real-time filter updates

### 🗂️ CarsListStore (Zustand)
Global state management:
```typescript
{
  cars: CarCatalog[]           // Current cars list
  favorites: CarCatalog[]      // Favorite cars (persisted)
  page: number                 // Current page
  searchQuery: SearchForm      // Active filters

  fetchCars()                  // Fetch with filters
  fetchNextPage()              // Load more (pagination)
  toggleFavorite()             // Add/remove favorite
  isFavorite()                 // Check if car is favorite
}
```

---

<div align="center">

**Made with ❤️ using Next.js**

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#-rental-car---car-rental-service)

</div>
