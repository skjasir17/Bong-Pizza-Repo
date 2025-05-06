const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const session = require('express-session');
const flash=require('connect-flash');
const pageRoutes = require('./routes/pageRoutes');
const feedbackRouter = require('./routes/feedbackRoutes');
const adminRouter = require('./routes/adminRoutes'); // Import the admin routes

dotenv.config();     // Load environment variables
connectDB();         // Connect to MongoDB

const app = express();
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

// Initialize flash
app.use(flash());

// Make flash messages available in all views
app.use((req, res, next) => {
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use('/', pageRoutes); // Use the page routes
app.use('/', feedbackRouter);
app.use('/admin',adminRouter); // Use the admin routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
