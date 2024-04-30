import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, StarsCanvas } from './components';

// Lazy loading for components
const LazyHero = React.lazy(() => import('./components/Hero'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyExperience = React.lazy(() => import('./components/Experience'));
const LazyTech = React.lazy(() => import('./components/Tech'));
const LazyWorks = React.lazy(() => import('./components/Works'));
const LazyFeedbacks = React.lazy(() => import('./components/Feedbacks'));
const LazyContact = React.lazy(() => import('./components/Contact'));

// Preload assets
const preloadAssets = () => {
  const img = new Image();
  img.src = 'path_to_your_image'; // Replace with the path to your image
};

const App = () => {
  preloadAssets(); // Preload assets when the component mounts

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHero />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyAbout />
          <LazyExperience />
          
          <LazyWorks />
          <LazyFeedbacks />
          <div className='relative z-0'>
            <LazyContact />
            <StarsCanvas />
            <LazyTech />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;