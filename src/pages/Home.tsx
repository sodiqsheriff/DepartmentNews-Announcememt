import React, { useState, useEffect } from 'react';
import NewsCard from '../components/Newscard';
import SearchBar from '../components/Searchbar';
import { NewsItem } from '../types';
import { fetchNewsByCategory } from '../services/api';

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(news); // For filtered news based on search
  
  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNewsByCategory('general'); // Fetch news based on category
        setNews(newsData);
        setFilteredNews(newsData); // Set initial filtered news to all news
      } catch (error) {
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  // Handle search by filtering the news
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      setFilteredNews(news); // Show all news if no search query
    } else {
      const filtered = news.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((item) => (
          <NewsCard
            key={item.slug}
            title={item.title}
            description={item.description}
            image={item.imageUrl} // Ensure the field is consistent with your schema
            publishedAt={item.publishedAt}
            category={item.category}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
