import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--pepsi-blue) 0%, var(--pepsi-dark) 100%);
  color: white;
  padding: 2rem;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  z-index: 1;
`;

const ProductDisplay = styled.div`
  position: relative;
  height: 600px;
  
  @media (max-width: 968px) {
    height: 400px;
    margin-top: -100px;
  }
`;

const floatingAnimation = {
  y: [0, -20, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const products = [
  {
    src: "https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-classic-hero.png",
    alt: "Pepsi Classic",
    style: { width: "300px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
  },
  {
    src: "https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-zero-hero.png",
    alt: "Pepsi Zero",
    style: { width: "250px", position: "absolute", top: "30%", left: "20%", transform: "translate(-50%, -50%)" }
  },
  {
    src: "https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-cherry-hero.png",
    alt: "Pepsi Cherry",
    style: { width: "250px", position: "absolute", top: "70%", left: "80%", transform: "translate(-50%, -50%)" }
  }
];

const Hero = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <TextContent>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: "clamp(3rem, 5vw, 5rem)",
                marginBottom: "2rem",
                fontWeight: "bold",
                lineHeight: 1.1
              }}
            >
              Refresh Your World
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ 
                  display: "block",
                  color: "var(--pepsi-red)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)"
                }}
              >
                With Pepsi
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ 
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                maxWidth: "600px",
                marginBottom: "2rem",
                opacity: 0.9
              }}
            >
              Experience the bold, refreshing taste that's been a global icon for generations. Every sip is a celebration of what's next.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1, duration: 0.3 }}
              style={{
                background: "var(--pepsi-red)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                fontSize: "1.2rem",
                fontWeight: "bold"
              }}
            >
              Explore Products
            </motion.button>
          </TextContent>
          <ProductDisplay>
            {products.map((product, index) => (
              <motion.img
                key={product.alt}
                src={product.src}
                alt={product.alt}
                style={product.style}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  ...floatingAnimation
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8
                }}
              />
            ))}
          </ProductDisplay>
        </HeroContent>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;