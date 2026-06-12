import jwt from 'jsonwebtoken';

export default function project(req, res, next){
    const token = req.header.authorization?.split(' ')[1];

    if(!token) return res.status(401).json({ message: 'No Token, unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch{
        res.status(401).json({ message: 'Invalid Token'});
    }
    };