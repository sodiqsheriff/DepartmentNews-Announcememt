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
  content?: string; // Make content optional
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
        const newsDetail = await fetchNewsBySlug(slug);
        if (newsDetail) {
          setNews(newsDetail);
        } else {
          setError("News not found");
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching news:", err.message);
        } else {
          console.error("Unknown error fetching news");
        }
        setError("Failed to load news details");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [slug]); // Rerun the effect when `slug` changes
  
  return (
    <div className="px-6 py-24 my-64">
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
              By {news.author} | {new Date(news.publishedAt).toLocaleDateString()}
            </p>
            <div className="mt-6">
              <p>{news.content || 'No content available.'}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Comments</h3>
              <textarea placeholder="Write a comment..." className="w-full mt-4 p-2 border rounded-md" />
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md">Post Comment</button>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Reactions</h3>
              <button className="mr-4 text-lg">👍 Like</button>
              <button className="mr-4 text-lg">❤️ Love</button>
              <button className="mr-4 text-lg">😡 Angry</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewsDetail;
