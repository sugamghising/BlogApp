import express from "express";
import { login, logout } from "../controller/authController";
import { createArticle, deleteArticle, updateArticle } from "../controller/articleController";
import { authAdmin } from "../middleware/authMiddleware";

const adminRouter = express.Router();

adminRouter.post('/login',login);
adminRouter.get('/register',logout);


adminRouter.post('/articles',authAdmin,createArticle);
adminRouter.put('/articles/:id',authAdmin,updateArticle);
adminRouter.delete('/articles/:id',authAdmin,deleteArticle);

export default adminRouter;