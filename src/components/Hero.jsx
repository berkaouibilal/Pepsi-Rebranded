import { motion } from 'framer-motion';
import styled from 'styled-components';
import splitSring from '../utils/splitString';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--pepsi-red) 0%, var(--background) 45%, var(--pepsi-blue) 100%);
  color: var(--text);
  overflow: hidden;
  padding: 2rem;
  padding-top: 6.8rem;
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
    ease: "easeInOut",
    delay: 1
  },
};

const products = [
  {
    src: "https://www.pepsi.com/s3fs-public/2024-07/44341_Titan_Pep_Can_12oz_FR.png",
    alt: "Pepsi Classic",
    style: { width: "300px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
  },
  {
    src: "https://www.pepsi.com/assets/images/cans/can-2.webp",
    alt: "Pepsi Zero",
    style: { width: "250px", position: "absolute", top: "30%", left: "20%", transform: "translate(-50%, -50%)" }
  },
  {
    src: "https://www.pepsi.com/s3fs-public/2024-07/44347_Titan_PWC_Can_12oz_FR.png",
    alt: "Pepsi Cherry",
    style: { width: "250px", position: "absolute", top: "70%", left: "80%", transform: "translate(-50%, -50%)" }
  }
];

const headingFirst = "Refresh Your World";
const headingSecond = "With Pepsi";
const paragraph = "Experience the bold, refreshing taste that's been a global icon for generations. Every sip is a celebration of what's next.";

const charVariants = {
  hidden: {opacity:0},
  visible: {opacity:1},
}

const Hero = () => {
  const headingFirstChars = splitSring(headingFirst);
  const headingSecondChars = splitSring(headingSecond);
  const paragraphChars = splitSring(paragraph);
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
              {headingFirstChars.map(hfc=>(
                <motion.span key={hfc}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 2.8}}>
                  {hfc}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ 
                  display: "block",
                  color: "var(--text-highlight)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)"
                }}
              >
                {headingSecondChars.map(hsc=>(
                  <motion.span key={hsc}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2.8}}>
                    {hsc}
                  </motion.span>
                ))}
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
              {paragraphChars.map(pc=>(
                <motion.span key={pc}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 2.8}}>
                  {pc}
                </motion.span>
              ))}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1, duration: 0.3 }}
              style={{
                background: "var(--button)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                fontSize: "1.2rem",
                fontWeight: "bold"
              }}
            >
              <Link to='/products'>Explore Our Products</Link>
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
                  ...floatingAnimation,
                  x: index % 2 === 0 ? 0 : -20
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