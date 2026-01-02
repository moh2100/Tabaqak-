import React, { Suspense, memo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import LoadingSpinner from './components/LoadingSpinner';
import BackgroundBlobs from './components/BackgroundBlobs';

// Lazy load non-critical components for better initial load time
const Features = React.lazy(() => import('./components/Features'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const AppScreens = React.lazy(() => import('./components/AppScreens'));
const StatsCounter = React.lazy(() => import('./components/StatsCounter'));
const PartnerStats = React.lazy(() => import('./components/PartnerStats'));
const CaptainSection = React.lazy(() => import('./components/CaptainSection'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const DownloadSection = React.lazy(() => import('./components/DownloadSection'));
const FAQ = React.lazy(() => import('./components/FAQ'));

// Memoized lazy content to prevent unnecessary re-renders
const LazyContent = memo(() => (
  <>
    <Features />
    <HowItWorks />
    <AppScreens />
    <StatsCounter />
    <PartnerStats />
    <CaptainSection />
    <Testimonials />
    <FAQ />
    <DownloadSection />
  </>
));

LazyContent.displayName = 'LazyContent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden dir-rtl font-sans text-gray-900 relative">
      <BackgroundBlobs />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          {/* Single Suspense boundary for better performance */}
          <Suspense fallback={<LoadingSpinner />}>
            <LazyContent />
          </Suspense>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </div>
  );
};

export default App;