import { Link } from 'react-router-dom';
import { urlFor } from '../services/image';


interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  category: string;
  url: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, publishedAt, category, slug }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={image ? urlFor(image).width(500).url() : "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
        onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}
      />
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-gray-600">{description}</p>
      <div className="mt-3 text-sm text-gray-500">
        <span>Category: {category}</span>
        <br />
        <span>Published on: {new Date(publishedAt).toLocaleDateString()}</span>
      </div>
      <Link to={`/news/${slug}`} className="mt-2 text-blue-500 hover:underline">
        Read more
      </Link>
    </div>
  );
};


export default NewsCard