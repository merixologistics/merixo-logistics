import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Quote from './pages/Quote';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import TrackingPage from './pages/TrackingPage';
import AboutUs from './pages/AboutUs';
// import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-sand min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/track" element={<TrackingPage />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
            {/* <div className='relative container mx-auto px-6 relative z-10 mb-6'>
             <div className="border-t border-white/10 mt-10  text-center text-stone-500 text-sm">
                    <p>&copy; 2026 developed by MerixoPatners.All rights reserved</p>
               // <p>&copy; 2025 developed by <a href='https://vishor-portfolio.netlify.app/' target="_blank">Vishor.</a>All rights reserved</p>
                 
                </div>
                </div> */}
                 <div className="border-t border-white/10  pt-8 bg-black  text-center text-stone-500 text-sm py-6">
                    <p>&copy; 2025 developed by MerixoPatners.All rights reserved</p>
                </div>
          </main>
          <WhatsAppButton />
          {/* <Chatbot /> */}
          
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
