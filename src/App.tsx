import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementPage from './pages/AnnouncementPage';
import NewsDetail from './pages/NewsDetailsPage';
import NotFound from './pages/NotFoundPage';
import AboutUs from './pages/AboutUs';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar onSearch={function (): Promise<void> {
        throw new Error('Function not implemented.');
      } } />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/announce" element={<AnnouncementPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  ); 
};

export default App;
