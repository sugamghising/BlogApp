import mongoose, { Document, Schema } from "mongoose";

export interface IArticle extends Document{
    title: string;
    content: string;
    publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema<IArticle>({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required : true,
    },
    publishedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model<IArticle>('Article',articleSchema);