import express from 'express'
import { createArticle, deleteArticle, getArticleById, getArticles, updateArticle } from '../controller/articleController';

const articleRouter = express.Router();

articleRouter.get('/',getArticles);
articleRouter.get('/:id',getArticleById);


articleRouter.post("/articles", createArticle);
articleRouter.put("/articles/:id", updateArticle);
articleRouter.delete("/articles/:id", deleteArticle);