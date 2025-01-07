import React, { useEffect, useState } from "react";
import { fetchAnnouncements } from "../services/fetchAnnouncements";

interface Announcement {
  title: string;
  content: string;
  date: string;
}

const AnnouncementPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error loading announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAnnouncements();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-blue-600">Loading announcements...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Announcements</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{announcement.title}</h2>
              <p className="text-gray-700 text-sm mb-4 overflow-hidden line-clamp-4">
                {announcement.content}
              </p>
              <span className="text-xs text-gray-500">
                {new Date(announcement.date).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
