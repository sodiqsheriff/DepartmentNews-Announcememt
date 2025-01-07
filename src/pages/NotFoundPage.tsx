import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
