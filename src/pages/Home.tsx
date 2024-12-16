import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { fetchNewsByCategory, searchNews } from "../services/api";
import { News, NewsItem } from "../types";
import NewsCard from "../components/Newscard";

// Helper function to transform API response to NewsItem[]
const transformToNewsItem = (news: News[]): NewsItem[] => {
  return news.map((item) => ({
    _id: item._id || "",
    author: item.author || "Unknown",
    slug: item.slug || "",
    title: item.title,
    url: item.url,
    description: item.description,
    imageUrl: item.imageUrl,
    publishedAt: item.publishedAt,
    category: item.category,
  }));
};

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDefaultNews = async () => {
      try {
        setLoading(true);
        const defaultNews = await fetchNewsByCategory("general");
        setNews(transformToNewsItem(defaultNews));
      } catch (err) {
        console.error("Error fetching default news:", err);
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchDefaultNews();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      // Reload default news when search is cleared
      try {
        const defaultNews = await fetchNewsByCategory("general");
        setNews(transformToNewsItem(defaultNews));
      } catch (err) {
        console.error("Error reloading news:", err);
        setError("Failed to reload news");
      }
      return;
    }

    try {
      setLoading(true);
      const searchResults = await searchNews(query);
      setNews(transformToNewsItem(searchResults));
    } catch (err) {
      console.error("Error searching news:", err);
      setError("Failed to search news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="px-6 py-24">
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center text-lg text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <NewsCard
                key={item.slug || item._id}
                title={item.title}
                description={item.description}
                image={item.imageUrl}
                publishedAt={item.publishedAt}
                category={item.category}
                slug={item.slug}
                url={item.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
