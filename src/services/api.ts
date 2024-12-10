import config from './SanityClient';

// Define the type for the news response
interface News {
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  url: string;
  category: string;
}

// Function to fetch news by category
export const fetchNewsByCategory = async (category: string): Promise<News[]> => {
  if (!category) {
    throw new Error("Category parameter is required");
  }

  const query = `*[_type == "news" && category == $category] | order(publishedAt desc) {
    title, 
    description, 
    imageUrl, 
    publishedAt, 
    url, 
    category
  }`;

  try {
    const response: News[] = await config.fetch(query, { category });
    return response;
  } catch (error: any) {
    console.error("Error fetching news by category:", error.message);
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
  } catch (error: any) {
    console.error("Error searching news:", error.message);
    throw new Error("Failed to search news");
  }
};
