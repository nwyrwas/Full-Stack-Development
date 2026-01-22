# 🌍 Travlr - Full-Stack Travel Management Platform

A modern, full-stack web application for discovering, managing, and sharing travel trips. Built with cutting-edge technologies, Travlr combines a powerful Node.js/Express backend with an Angular-based admin dashboard.

---

## ✨ Features

- **Trip Management**: Create, edit, and delete travel trips with detailed information
- **Admin Dashboard**: Angular-powered administrative interface for managing trips
- **User Authentication**: Secure JWT-based authentication system with Passport.js
- **Database Integration**: MongoDB with Mongoose for robust data persistence
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **RESTful API**: Well-structured API endpoints for trip and user operations
- **Server-Side Rendering**: Express.js with Handlebars templating for dynamic content

---

## 🏗️ Project Structure

```
travlr/
├── app_server/           # Express server with server-side rendering
│   ├── controllers/      # Request handlers
│   ├── routes/          # Route definitions
│   └── views/           # Handlebars templates
├── app_api/             # RESTful API server
│   ├── controllers/     # API request handlers
│   ├── routes/          # API endpoints
│   └── database/        # MongoDB models and connection
├── app_admin/           # Angular admin dashboard
│   └── src/
│       ├── app/         # Angular components and services
│       └── assets/      # Static assets
├── bin/                 # Entry point
└── data/                # Sample data
```

---

## 🛠️ Tech Stack

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT & Passport.js for authentication
- Morgan for logging

**Frontend (Admin):**
- Angular
- TypeScript
- Angular CLI

**Architecture:**
- RESTful API design
- MVC pattern
- Server-side rendering with Handlebars

---

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Angular CLI (for development)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/nwyrwas/Full-Stack-Development.git
cd Full-Stack-Development/"Module 7 Project"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/travlr
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

### 4. Start the Server
```bash
npm start
```

The application will be available at `http://localhost:3000`

### 5. Admin Dashboard (Optional)
```bash
cd app_admin
npm install
ng serve
```

Admin dashboard will be available at `http://localhost:4200`

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Trips
- `GET /api/trips` - Get all trips
- `GET /api/trips/:id` - Get trip by ID
- `POST /api/trips` - Create new trip (requires auth)
- `PUT /api/trips/:id` - Update trip (requires auth)
- `DELETE /api/trips/:id` - Delete trip (requires auth)

---

## 🔐 Authentication

Travlr uses JWT (JSON Web Tokens) for secure authentication:
1. Users log in with credentials
2. Server returns JWT token
3. Token is included in Authorization header for protected routes
4. Token is validated on each request

---

## 💾 Database Schema

**Users Collection:**
- Username
- Email
- Password (hashed)
- Created date

**Trips Collection:**
- Title
- Description
- Destination
- Start/End dates
- Images
- Cost
- Created by (User reference)

---

## 🧪 Testing

Run the test suite:
```bash
npm test
```

---

## 📝 Development

### Available Scripts

```bash
npm start          # Start the server
npm run dev        # Start with nodemon (auto-reload)
ng serve          # Start Angular dev server
ng build          # Build Angular project
```

### Code Style

The project follows standard JavaScript conventions with ESLint configuration.

---

## 🐛 Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB is running: `mongod`
- Check MONGODB_URI in .env file

**Port Already in Use:**
```bash
lsof -i :3000  # Check what's using port 3000
kill -9 <PID>  # Kill the process
```

**Angular Build Issues:**
```bash
cd app_admin
npm cache clean --force
npm install
ng build
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is part of the CS-465 Full-Stack Development course.

---

## 👤 Author

**Nick Wyrwas**

- GitHub: [@nwyrwas](https://github.com/nwyrwas)
- Repository: [Full-Stack-Development](https://github.com/nwyrwas/Full-Stack-Development)

---

## 📞 Support

For support, email or open an issue on the GitHub repository.

---

**Happy Traveling! 🌴✈️🗺️**
