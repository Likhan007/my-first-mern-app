# MERN Stack Application with MongoDB Atlas

A full-stack web application built with **MongoDB**, **Express.js**, **React**, and **Node.js**, connected to **MongoDB Atlas**.

## Project Structure

```
my-first-mern-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection config
│   ├── controllers/
│   │   └── userController.js     # User CRUD logic
│   ├── models/
│   │   └── User.js               # User MongoDB schema
│   ├── routes/
│   │   └── userRoutes.js         # User API routes
│   ├── server.js                 # Express server entry point
│   ├── .env.example              # Environment variables template
│   └── package.json              # Backend dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html            # HTML entry point
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosConfig.js    # API client configuration
│   │   ├── components/
│   │   │   ├── UserForm.js       # Create user form
│   │   │   └── UserList.js       # Display users list
│   │   ├── styles/
│   │   │   ├── index.css         # Global styles
│   │   │   ├── App.css           # App styles
│   │   │   ├── UserForm.css      # Form styles
│   │   │   └── UserList.css      # List styles
│   │   ├── App.js                # Main React component
│   │   └── index.js              # React entry point
│   └── package.json              # Frontend dependencies
│
└── README.md                      # Project documentation
```

## Prerequisites

- **Node.js** (v14+)
- **npm** or **yarn**
- **MongoDB Atlas** account (free at https://www.mongodb.com/cloud/atlas)

## Setup Instructions

### 1. Create a MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project and cluster
4. Get your connection string:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It will look like: `mongodb+srv://username:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority`

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/database-name?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**Replace:**
- `username` - Your MongoDB Atlas username
- `password` - Your MongoDB Atlas password
- `cluster-name` - Your cluster name
- `database-name` - Your database name (e.g., `mern-app`)

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Setup Frontend

In a new terminal, navigate to the frontend folder:

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/health` | Health check |

## Usage

1. Open `http://localhost:3000` in your browser
2. Enter user details (name, email, age) in the form
3. Click "Create User" to add a user to MongoDB
4. View all users in the list below
5. Delete users by clicking the Delete button

## Features

✅ Create, Read, Update, Delete (CRUD) users
✅ MongoDB Atlas cloud database
✅ React frontend with modern UI
✅ Express.js backend API
✅ Form validation
✅ Error handling
✅ Responsive design

## Development

### Backend Commands

```bash
npm start      # Run server in production
npm run dev    # Run server with nodemon (auto-reload)
```

### Frontend Commands

```bash
npm start      # Start development server
npm build      # Build for production
npm test       # Run tests
```

## Troubleshooting

### MongoDB Connection Error
- Verify MongoDB URI in `.env` file
- Check if IP is whitelisted in MongoDB Atlas
- Ensure database user credentials are correct

### CORS Error
- Backend CORS is configured to accept requests from frontend
- Check if backend is running on port 5000

### Port Already in Use
- Backend: Change `PORT` in `.env` file
- Frontend: Set `PORT` environment variable before `npm start`

## Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Mongoose Documentation](https://mongoosejs.com/)

## License

MIT
