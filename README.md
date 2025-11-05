# BlogApp

A modern, full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features include article management, admin authentication, and a clean, responsive UI with native CSS.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)
![React](https://img.shields.io/badge/React-19.2-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933)

## ✨ Features

### Frontend

- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🎨 **Native CSS** - No CSS frameworks, pure CSS with variables
- ⚡ **Fast Performance** - Optimized with React hooks and context API
- 🔐 **Session-based Auth** - Secure admin authentication
- 📝 **Rich Article Editor** - Simple and intuitive article creation
- 🎯 **TypeScript** - Fully typed for better development experience

### Backend

- 🚀 **RESTful API** - Clean and organized API endpoints
- 🗄️ **MongoDB** - NoSQL database with Mongoose ODM
- 🔒 **Secure Sessions** - Express sessions with MongoDB store
- 📊 **CRUD Operations** - Complete article management
- ⚙️ **Environment Config** - Secure configuration with dotenv
- 🔄 **Hot Reload** - Nodemon for development

## 🏗️ Tech Stack

### Frontend

- **React 19.2** - UI library
- **TypeScript 4.9** - Type safety
- **React Router 7.9** - Client-side routing
- **Axios 1.13** - HTTP client
- **Context API** - State management
- **Native CSS** - Styling with CSS variables

### Backend

- **Node.js 18+** - Runtime environment
- **Express.js 4.21** - Web framework
- **MongoDB** - Database
- **Mongoose 8.9** - ODM
- **TypeScript 5.7** - Type safety
- **Express Session** - Session management
- **Connect Mongo** - Session store

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or higher
- **npm** or **yarn**
- **MongoDB** (Atlas account or local installation)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/sugamghising/BlogApp.git
cd BlogApp
```

### 2. Backend Setup

#### Install Dependencies

```bash
cd server
npm install
```

#### Environment Configuration

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=5000

# Session Secret (use a strong random string)
SESSION_SECRET=your-super-secure-random-secret-key-here

# MongoDB Connection (required)
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# Admin Credentials (for initial setup)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

**Important Notes:**

- Replace `<username>`, `<password>`, `<cluster>`, and `<database>` with your MongoDB credentials
- Generate a strong `SESSION_SECRET` (32+ characters recommended)
- Change default admin credentials after first login

#### Start the Backend Server

```bash
# Development mode (with hot reload)
npm run dev

# Production mode
npm run build
npm start
```

Server will run on `http://localhost:5000`

### 3. Frontend Setup

#### Install Dependencies

```bash
cd client
npm install
```

#### Environment Configuration

Create a `.env` file in the `client/` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

#### Start the Frontend

```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
BlogApp/
├── client/                 # React Frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── admin/    # Admin components
│   │   │   ├── article/  # Article components
│   │   │   ├── common/   # Shared components
│   │   │   └── layout/   # Layout components
│   │   ├── context/      # React Context API
│   │   │   ├── AuthContext.tsx
│   │   │   └── ArticleContext.tsx
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── types/        # TypeScript types
│   │   ├── App.tsx       # Main App component
│   │   └── index.css     # Global styles
│   └── package.json
│
├── server/                # Node.js Backend
│   ├── src/
│   │   ├── config/       # Configuration
│   │   │   └── db.ts    # MongoDB connection
│   │   ├── controller/   # Route controllers
│   │   │   ├── articleController.ts
│   │   │   └── authController.ts
│   │   ├── middleware/   # Express middleware
│   │   │   └── authMiddleware.ts
│   │   ├── models/       # Mongoose models
│   │   │   └── Article.ts
│   │   ├── routes/       # API routes
│   │   │   ├── adminRoutes.ts
│   │   │   └── articleRoutes.ts
│   │   └── index.ts      # Server entry point
│   ├── dist/            # Compiled JavaScript (generated)
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Public Routes

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/`                 | Health check      |
| GET    | `/api/articles`     | Get all articles  |
| GET    | `/api/articles/:id` | Get article by ID |

### Admin Routes (Authentication Required)

| Method | Endpoint                  | Description        |
| ------ | ------------------------- | ------------------ |
| POST   | `/api/admin/login`        | Admin login        |
| POST   | `/api/admin/logout`       | Admin logout       |
| POST   | `/api/admin/articles`     | Create new article |
| PUT    | `/api/admin/articles/:id` | Update article     |
| DELETE | `/api/admin/articles/:id` | Delete article     |

## 🎨 Features in Detail

### Article Management

- Create, read, update, and delete articles
- Automatic timestamp tracking (created/updated dates)
- Published date automatically set on creation
- Rich text content support

### Admin Dashboard

- Secure session-based authentication
- Article statistics and overview
- Quick article creation and editing
- Article list with search and filter
- Responsive table view

### User Experience

- Clean and modern interface
- Responsive design for all screen sizes
- Loading states and error handling
- Smooth transitions and animations
- Intuitive navigation

## 🛠️ Development

### Available Scripts

#### Backend (server/)

```bash
npm run dev      # Start development server with hot reload
npm run build    # Compile TypeScript to JavaScript
npm start        # Start production server
```

#### Frontend (client/)

```bash
npm start        # Start development server
npm run build    # Create production build
npm test         # Run tests
```

### Code Style

- **TypeScript** for type safety
- **ESLint** for code linting
- **Functional components** with React Hooks
- **Async/await** for asynchronous operations

## 🔧 Configuration

### MongoDB Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Add your connection string to `.env` in the server directory

### Session Configuration

The application uses express-session with MongoDB store for session management. Sessions are stored in the MongoDB database and persist across server restarts.

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**

- Check if MongoDB URI is correct in `.env`
- Ensure MongoDB Atlas allows connections from your IP
- Verify all required environment variables are set

**Frontend can't connect to backend:**

- Check if backend server is running on port 5000
- Verify REACT_APP_API_URL in frontend `.env`
- Check browser console for CORS errors

**Session not persisting:**

- Verify SESSION_SECRET is set
- Check MongoDB connection is stable
- Clear browser cookies and try again

**Infinite API calls:**

- This issue has been fixed with useCallback hooks
- If you encounter it, check useEffect dependencies

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sugam Ghising**

- GitHub: [@sugamghising](https://github.com/sugamghising)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Create React App for the frontend setup
- MongoDB for the database
- Express.js for the backend framework
- React community for the amazing ecosystem

---

Made with ❤️ by Sugam Ghising
