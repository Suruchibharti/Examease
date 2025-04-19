import jwt from 'jsonwebtoken';
import Userr from '../Models/User.js';

const protectRoute = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    const decodedToken = jwt.verify(token, 'secret');
    const userId = decodedToken.userId;


    const user = await Userr.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - User not found' });
    }


    req.user = { id: userId, name: user.name, email: user.email, isAdmin: user.isAdmin };
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

export default protectRoute;