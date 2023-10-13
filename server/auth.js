const jwt = require('jsonwebtoken');
const User = require('./models/user');

function authenticateUser(req, res, next) {
  // Get token from request header
  const token = req.header('Authorization');

  // If no token is provided, return error
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID
    User.findById(decoded._id, (err, user) => {
      if (err || !user) {
        return res.status(401).send('Access denied. Invalid token.');
      }

      // Set user object on request for use in other middleware/functions
      req.user = user;

      // Continue to next middleware/function
      next();
    });
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
}

module.exports = authenticateUser;
