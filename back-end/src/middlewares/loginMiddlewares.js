const md5 = require('md5');
const { User } = require('../database/models');

const validateEmail = (req, res, next) => {
  const { email } = req.body; 
  const vEmail = /^\S+@\S+\.\S+$/;
  if (!email || !vEmail.test(email)) res.status(400).json({ message: 'Invalid email' });
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }
  next();
};

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const hashedPassword = md5(password);

  if (!user || hashedPassword !== user.password) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.locals.user = {
    id: user.id, 
    name: user.name, 
    email: user.email, 
    role: user.role, 
  };

  next();
};

module.exports = {
  validatePassword,
  validateEmail,
  validateUser,
};