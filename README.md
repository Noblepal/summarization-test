# Landing Page with Authentication

A modern, dark-themed landing page built with React, TypeScript, and Tailwind CSS. Features a complete authentication system with protected routes and a user dashboard.

## 🚀 Tech Stack

- **Framework:** React 18.2
- **Language:** TypeScript 5.2
- **Build Tool:** Vite 5.1
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router DOM 6.22
- **Icons:** Lucide React 0.344

## 📁 Project Structure

```
src/
├── components/
│   ├── Contact.tsx          # Contact form section
│   ├── Features.tsx         # Features showcase section
│   ├── Footer.tsx           # Site footer with links
│   ├── Hero.tsx             # Landing page hero section
│   ├── Navbar.tsx           # Navigation bar with auth links
│   ├── ProtectedRoute.tsx   # Route guard for authenticated pages
│   └── Testimonials.tsx     # Customer testimonials section
├── context/
│   └── AuthContext.tsx      # Authentication state management
├── pages/
│   ├── Dashboard.tsx        # Protected user dashboard
│   ├── Home.tsx             # Main landing page
│   ├── Login.tsx            # User login page
│   └── Signup.tsx           # User registration page
├── App.tsx                  # Main app component with routing
├── main.tsx                 # Application entry point
└── index.css                # Global styles with Tailwind
```

## ✨ Features

### Landing Page
- **Hero Section:** Eye-catching introduction with CTA buttons
- **Features Section:** Showcase of key product features
- **Testimonials:** Customer reviews and social proof
- **Contact Form:** Direct communication channel
- **Responsive Design:** Mobile-first, fully responsive layout
- **Dark Theme:** Modern dark mode aesthetic

### Authentication System
- **User Registration:** Sign up with email and password
- **User Login:** Secure authentication flow
- **Protected Routes:** Dashboard accessible only to authenticated users
- **Auth Context:** Global authentication state management
- **Persistent Sessions:** User stays logged in across page refreshes

### Navigation
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Dynamic auth state (Login/Signup vs Dashboard/Logout)

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
