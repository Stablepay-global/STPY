# Stable Pay - High-Yield Onchain Investment Platform

## Overview

Stable Pay is a full-stack web application that provides a high-yield onchain investment platform specifically designed for Indian markets. The application targets NRIs (Non-Resident Indians), HNIs (High Net Worth Individuals), and corporate investors, offering 12-18% annual returns with regulatory compliance and self-custody control.

## Recent Changes (July 16, 2025)

✓ **Complete UI/UX Redesign**: Rebuilt entire interface with institutional-grade design
  - Professional slate-based color palette inspired by leading financial platforms
  - Deep navy primary colors with sophisticated gradients
  - Inter font family for enhanced readability and modern appearance
  - Elevated shadow system with multiple elevation levels
  - Glass-morphism effects with backdrop blur for modern aesthetic

✓ **Enhanced Hero Section**: Completely rebuilt with premium design elements
  - Large typography with gradient text effects
  - Sophisticated background with dot patterns and animated blur elements
  - Professional trust indicators with icon-based design
  - Modern dashboard preview with real-time styling
  - Call-to-action buttons with hover animations and micro-interactions

✓ **Professional Navigation**: Premium navigation bar design
  - Backdrop blur with glass-morphism effect
  - Enhanced logo with tagline for brand recognition
  - Smooth hover states and transitions
  - Consistent spacing and professional typography
  - Mobile-optimized with slide-out menu

✓ **Advanced Features Section**: Institutional-grade feature presentation
  - Statistics dashboard with key metrics
  - Color-coded feature cards with hover effects
  - Professional icons and consistent spacing
  - Gradient CTA section with call-to-action
  - Enhanced accessibility and readability

✓ **Technical Improvements**: Modern CSS architecture
  - CSS custom properties with proper color space values
  - Component-based utility classes
  - Responsive design with mobile-first approach
  - Performance-optimized with reduced bundle size
  - Consistent design system throughout

## User Preferences

Preferred communication style: Simple, everyday language.
Strict color palette: Only #6667AB (primary purple-blue) and #FAF9F6 (light cream background) allowed throughout the entire application.
Design requirement: No blurry text - all text must be crisp with proper antialiasing.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and shared components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with Vite integration in development mode
- **API Structure**: RESTful API design with `/api` prefix routing

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Environment-based database URL configuration

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Navigation with smooth scrolling
   - Hero section with value proposition
   - Features showcase
   - Investment comparison table
   - Target audience sections (NRI, HNI, Corporate)
   - Compliance and security information
   - Call-to-action sections

2. **UI Component Library**:
   - Complete shadcn/ui component set
   - Custom styled components for financial data presentation
   - Responsive design components
   - Form components with validation support

### Backend Components
1. **Server Setup**:
   - Express.js application with middleware configuration
   - Route registration system
   - Error handling middleware
   - Development/production environment detection

2. **Storage Layer**:
   - Abstract storage interface for CRUD operations
   - In-memory storage implementation for development
   - User management with authentication preparation

3. **Development Tools**:
   - Vite integration for HMR in development
   - Request logging middleware
   - Static file serving

### Shared Components
1. **Database Schema**:
   - User table with username/password fields
   - Zod validation schemas
   - Type-safe database operations

2. **Type Definitions**:
   - Shared TypeScript types between frontend and backend
   - Database model types
   - API request/response types

## Data Flow

1. **User Registration/Authentication**: Prepared user schema with username/password authentication
2. **Investment Data**: Ready for integration with onchain investment tracking
3. **Compliance Reporting**: Infrastructure for FIU-IND and FEMA compliance reporting
4. **Multi-chain Support**: Architecture prepared for Ethereum, BSC, and Base networks

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Vite with React plugin and runtime error overlay

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution

### Build Tools
- **Bundling**: Vite for frontend, esbuild for backend
- **Type Checking**: TypeScript with strict mode enabled
- **Package Management**: npm with lockfile version 3

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- tsx for backend TypeScript execution
- Integrated development workflow with shared types

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `drizzle-kit push`

### Environment Configuration
- Database URL configuration via environment variables
- Separate development and production configurations
- Replit-specific development tools integration

### Compliance Infrastructure
The application is architected to support:
- FIU-IND registration and reporting
- IFSCA compliance for international financial services
- FEMA reporting for foreign exchange management
- Multi-chain blockchain integration (Ethereum, BSC, Base)
- Self-custody wallet integration

The current implementation provides a solid foundation for a regulatory-compliant fintech platform with room for expansion into onchain investment features, multi-chain wallet integration, and automated compliance reporting systems.