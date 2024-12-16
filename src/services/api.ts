import { NewsItem } from "../types";
import config from "./SanityClient";

// Define the type for the news response
interface News {
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  url: string;
  category: string;
}


export const fetchNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  if (!category) {
    throw new Error("Category parameter is required");
  }

  const query = `*[_type == "news" && category == $category] | order(publishedAt desc) {
    title, 
    description, 
    "imageUrl": image.asset->url, 
    publishedAt, 
    url, 
    category
  }`;

  try {
    const response: NewsItem[] = await config.fetch(query, { category });
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching news by category:", error.message);
    } else {
      console.error("Unknown error fetching news by category:", error);
    }
    throw new Error("Failed to fetch news by category");
  }
};


// Function to fetch news by search query
export const searchNews = async (searchQuery: string): Promise<News[]> => {
  if (!searchQuery || searchQuery.trim() === "") {
    throw new Error("Search query parameter is required");
  }

  const query = `*[_type == "news" && title match $searchQuery] | order(publishedAt desc) {
    title, 
    description, 
    imageUrl, 
    publishedAt, 
    slug, 
    category
  }`;

  try {
    const response: News[] = await config.fetch(query, { searchQuery: `*${searchQuery.trim()}*` });
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error searching news:", error.message);
    } else {
      console.error("Unknown error searching news:", error);
    }
    throw new Error("Failed to search news");
  }
};


// src/services/api.ts

export const fetchNewsBySlug = async (slug: string): Promise<NewsItem | null> => {
  if (!slug) {
    throw new Error("Slug parameter is required");
  }

  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id, 
    title, 
    description, 
    "imageUrl": image.asset->url, 
    publishedAt, 
    author
  }`;

  try {
    const response: NewsItem | null = await config.fetch(query, { slug });
    if (!response) {
      throw new Error("News not found");
    }
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching news by slug:", error.message);
    } else {
      console.error("Unknown error fetching news by slug:", error);
    }
    throw new Error("Failed to fetch news by slug");
  }
};