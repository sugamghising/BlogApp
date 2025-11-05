import express from 'express'
import {  getArticleById, getArticles } from '../controller/articleController';

const articleRouter = express.Router();

articleRouter.get('/',getArticles);
articleRouter.get('/:id',getArticleById);


export default articleRouter;


