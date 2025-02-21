import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Newsletter from './components/Newsletter';
import SocialMedia from './components/SocialMedia';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Hero />
                  <ProductShowcase />
                  <Newsletter />
                  <SocialMedia />
                </motion.div>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </Router>
  );
}

export default App;