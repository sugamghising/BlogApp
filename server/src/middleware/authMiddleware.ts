import express, { Request,Response,NextFunction } from 'express'

export const authAdmin = async (req: Request,res:Response,next: NextFunction) =>{
    if (req.session && req.session.isAdmin) return next();
    res.status(403).json({ message: "Access denied. Admins only." });
}