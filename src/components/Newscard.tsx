import { Link } from 'react-router-dom';
import { urlFor } from '../services/image';

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  category: string;
  slug: string;
}

// Function to truncate text safely
const truncateText = (text: string | null | undefined, maxLength: number): string => {
  if (!text) return ""; // Handle null or undefined input
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};


const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, publishedAt, category, slug }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image ? urlFor(image).width(500).url() : "https://via.placeholder.com/500"}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/500")}
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
          {category}
        </span>
      </div>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-gray-600">{truncateText(description, 150)}</p>
      <div className="mt-3 text-sm text-gray-500">
        <span>Published on: {new Date(publishedAt).toLocaleDateString()}</span>
      </div>
      <Link to={`/news/${slug}`} className="mt-2 text-blue-500 hover:underline inline-block">
        Read more
      </Link>
    </div>
  );
};

export default NewsCard;
