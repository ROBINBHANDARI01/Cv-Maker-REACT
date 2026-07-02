import jwt from 'jsonwebtoken';

export default function protect(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No Token, unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Match standard practices: ensure your token payload provides either ._id or .id
        req.user = decoded; 
        
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Invalid Token' });
    }
}
