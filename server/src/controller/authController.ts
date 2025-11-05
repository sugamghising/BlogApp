import { Request, Response } from "express";

export const login = async (req: Request, res: Response) =>{
    const {username , password} = req.body;

    if( username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
        req.session.isAdmin = true;
        return res.json({ message: "Login successful" });
    }
    res.json({message: 'invalid credentials.'})
}

export const logout = async (req: Request , res: Response )=>{
        req.session.destroy((err) => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.json({ message: "Logged out successfully" });
      });
}