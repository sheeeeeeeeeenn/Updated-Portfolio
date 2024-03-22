// types/_type.ts

export enum BlogPlatform {
  Technology = "Technology",
}

export type NewsArticle = {
  sourceName: string;
  author: string | null;
  title: string;
  description: string;
  url: string;
  imageUrl: string | null;
  publishedAt: string;
  content: string;
};
