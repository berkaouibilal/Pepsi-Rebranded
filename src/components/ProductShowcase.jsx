import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ShowcaseSection = styled.section`
  min-height: 100vh;
  color: var(--pepsi-light);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: var(--card-bg);
  color: var(--text);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 75, 147, 0.1);
  }
`;

const VaporEffect = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, linear-gradient(
    to bottom,
    rgba(182, 33, 33, 0) 0%,
    rgb(167, 37, 4) 50%,
    rgb(0, 51, 255) 100%
  ) 50%, rgba(255, 255, 255, 0) 100%);
  border-radius: 20px;
  pointer-events: none;
  mix-blend-mode: screen;
`;

const ProductImage = styled(motion.img)`
  width: 70px;
  height: auto;
  margin-bottom: 1rem;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
`;

const products = [
  {
    id: 1,
    name: 'Pepsi Classic',
    image: 'https://www.pepsi.com/s3fs-public/2024-07/44341_Titan_Pep_Can_12oz_FR.png',
    description: 'The iconic taste that started it all'
  },
  {
    id: 2,
    name: 'Pepsi Zero Sugar',
    image: 'https://www.pepsi.com/assets/images/cans/can-2.webp',
    description: 'Zero sugar, maximum taste'
  },
  {
    id: 3,
    name: 'Pepsi Wild Cherry',
    image: 'https://www.pepsi.com/s3fs-public/2024-07/44347_Titan_PWC_Can_12oz_FR.png',
    description: 'A wild cherry twist on classic Pepsi'
  }
];

const ProductShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });

  return (

    <ShowcaseSection ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}
      >
        Our Products
      </motion.h2>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <VaporEffect
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <ProductImage
              src={product.image}
              alt={product.name}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            />
            <motion.h3
              style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
            >
              {product.name}
            </motion.h3>
            <motion.p>{product.description}</motion.p>
          </ProductCard>
        ))}
      </ProductGrid>
    </ShowcaseSection>
  );
};

export default ProductShowcase;