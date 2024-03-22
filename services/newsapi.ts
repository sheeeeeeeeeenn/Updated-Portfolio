// services/newsapi.ts
import axios from 'axios';
import { NewsArticle } from '../services/_type'; // Adjust import path as needed

const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const NEWS_API_KEY = process.env.NEWS_API_KEY;

console.log(`Using NewsAPI Key: ${NEWS_API_KEY}`); // Debugging line to check the API key value

/**
 * Fetches technology news articles from NewsAPI.
 * @returns {Promise<NewsArticle[]>} A promise that resolves to an array of news articles.
 */
export async function getTechnologyArticles(): Promise<NewsArticle[]> {
  try {
    const response = await axios.get(`${NEWS_API_BASE_URL}/top-headlines`, {
      params: {
        category: 'technology',
        apiKey: NEWS_API_KEY,
      },
    });

    if (response.status === 200) {
      // Map the response to fit the NewsArticle type
      return response.data.articles.map((article: any) => ({
        sourceName: article.source.name,
        author: article.author || 'Unknown',
        title: article.title,
        description: article.description || 'No description available',
        url: article.url,
        imageUrl: article.urlToImage || null,
        publishedAt: article.publishedAt,
        content: article.content || 'Content not available',
      }));
    } else {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error fetching technology news articles: ${error}`);
    throw error;
  }
}
