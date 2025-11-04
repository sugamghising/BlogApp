import express, {Request,Response} from 'express';
import Article from '../models/Article';

export const getArticles = async(req: Request, res: Response) =>{
    try{
        const articles = await Article.find().sort({publishedAt : -1})
        if(!articles){
            res.status(400).json({message: "No article found"});
        }
        res.json(articles);
    }catch(error){
        console.log("Error in the getArticles",(error as Error).message)
        res.status(500).json({message: "Server Error"});
    }
}

export const createArticle = async (req:Request, res:Response) => {
    try {
        const {title, content ,publishedAt} = req.body;
        const article = new Article({title,content,publishedAt});

        await article.save()
        res.status(200).json(article);
    } catch (error) {
        console.log("Error in the createArticle",(error as Error).message)
        res.status(500).json({message: "Server Error"});
    }
}

export const getArticleById = async (req: Request, res: Response) => {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  };


  export const updateArticle = async (req: Request, res: Response) => {
    const { title, content, publishedAt } = req.body;
    const updated = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content, publishedAt, updatedAt: new Date() },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Article not found" });
    res.json(updated);
  };

  export const deleteArticle = async (req: Request, res: Response) => {
    const deleted = await Article.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Article not found" });
    res.json({ message: "Article deleted successfully" });
  };