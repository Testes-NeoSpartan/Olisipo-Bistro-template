/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { LegalPage, PRIVACY_POLICY, TERMS_CONDITIONS } from './pages/Legal';
import { useEffect } from 'react';

import { BookingProvider } from './context/BookingContext';
import { BookingModal } from './components/BookingModal';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                  path="/privacy" 
                  element={<LegalPage title="Política de Privacidade" content={PRIVACY_POLICY} />} 
                />
                <Route 
                  path="/terms" 
                  element={<LegalPage title="Termos e Condições" content={TERMS_CONDITIONS} />} 
                />
                <Route 
                  path="/cookies" 
                  element={<LegalPage title="Política de Cookies" content="<p>Utilizamos apenas cookies essenciais e de desempenho.</p>" />} 
                />
              </Routes>
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </Router>
        <BookingModal />
      </BookingProvider>
      {/* Analytics for production deployments */}
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  );
}
