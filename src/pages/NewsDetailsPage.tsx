import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams for slug
import { fetchNewsBySlug } from '../services/api';

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
}

const NewsDetail: React.FC = () => {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams(); // Extract the slug from the URL

  useEffect(() => {
    if (!slug) return;

    const fetchNewsDetail = async () => {
      try {
        setLoading(true);
        console.log("Fetching news for slug:", slug); // Debugging slug
        const newsDetail = await fetchNewsBySlug(slug);
        console.log("Fetched news detail:", newsDetail); // Debugging API response
        setNews(newsDetail);
      } catch (err) {
        console.error("Error fetching news detail:", err); // Debugging error
        setError("Failed to load news details");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [slug]);

  return (
    <div className="px-6 py-24">
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        news && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h1 className="text-3xl font-bold mt-6">{news.title}</h1>
            <p className="text-gray-600 text-lg mt-2">
              By {news.author} | {news.publishedAt}
            </p>
            <div className="mt-6">
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewsDetail;
