import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  image: string; // Assuming you use the image URL
  publishedAt: string;
  category: string;
  slug: string;
}


const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, publishedAt, category, slug }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-gray-600">{description}</p>
      <div className="mt-3 text-sm text-gray-500">
        <span>Category: {category}</span> {/* Use the category here */}
        <br />
        <span>Published on: {new Date(publishedAt).toLocaleDateString()}</span>
      </div>
      <a href={`/news/${slug}`} className="mt-2 text-blue-500 hover:underline">Read more</a>
    </div>
  );
};

export default NewsCard;
