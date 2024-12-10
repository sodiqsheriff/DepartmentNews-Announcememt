import React, { useState } from 'react';
import sanityClient from '../services/SanityClient'; // Assume your Sanity client is configured here

const AdminPanel: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [publishedAt, setPublishedAt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Handle form submission to post news to Sanity
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !author || !publishedAt || !image) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Upload image to Sanity
      const imageAsset = await sanityClient.assets.upload('image', image);

      // Post news item to Sanity directly
      await sanityClient.create({
        _type: 'news',
        title,
        content,
        image: {
          asset: {
            _ref: imageAsset._id,
          },
        },
        author,
        publishedAt,
      });

      // Reset form after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
      setPublishedAt('');
      setImage(null);
      alert('News Posted Successfully!');
    } catch (err) {
      setError('Failed to post the news');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Post a News Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={5}
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="publishedAt" className="block text-sm font-medium">Publish Date</label>
          <input
            type="date"
            id="publishedAt"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post News'}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
