import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementPage from './pages/AnnouncementPage';
import NewsDetail from './pages/NewsDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar onSearch={function (): Promise<void> {
        throw new Error('Function not implemented.');
      } } />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/news/${slug}" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </Router>
  ); 
};

export default App;
