import { motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const ProductsPage = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 2rem;
  background: var(--background);
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow);
  transition: var(--transition);
  position: relative;
  cursor: pointer;
`;

const ProductImage = styled.div`
  position: relative;
  padding-top: 100%;
  background: linear-gradient(135deg, var(--pepsi-blue) 0%, var(--pepsi-dark) 100%);
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    transition: var(--transition);
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${props => props.variant === 'new' ? 'var(--pepsi-red)' : 'var(--pepsi-blue)'};
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ProductDetails = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme === 'dark'
    ? 'rgba(10, 25, 41, 0.95)'
    : 'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(8px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NutritionFact = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
`;

const BubbleEffect = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const products = [
  {
    id: 1,
    name: 'Pepsi Classic',
    image: 'https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-classic.png',
    description: 'The iconic taste that started it all',
    badge: 'classic',
    nutrition: {
      calories: '150',
      sugar: '41g',
      caffeine: '38mg'
    }
  },
  {
    id: 2,
    name: 'Pepsi Zero Sugar',
    image: 'https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-zero.png',
    description: 'Zero sugar, maximum taste',
    badge: 'new',
    nutrition: {
      calories: '0',
      sugar: '0g',
      caffeine: '35mg'
    }
  },
  {
    id: 3,
    name: 'Pepsi Wild Cherry',
    image: 'https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-cherry.png',
    description: 'A wild cherry twist on classic Pepsi',
    badge: 'featured',
    nutrition: {
      calories: '160',
      sugar: '42g',
      caffeine: '38mg'
    }
  },
  {
    id: 4,
    name: 'Pepsi Max',
    image: 'https://raw.githubusercontent.com/pepsi-marketing/brand-assets/main/products/pepsi-max.png',
    description: 'Maximum taste, no sugar',
    badge: 'new',
    nutrition: {
      calories: '0',
      sugar: '0g',
      caffeine: '43mg'
    }
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bubbles, setBubbles] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(selectedProduct?.id === product.id ? null : product);
  };

  const addBubble = (productId) => {
    const newBubble = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100
    };
    setBubbles(prev => [...prev, newBubble]);
    setTimeout(() => {
      setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
    }, 2000);
  };

  return (
    <ProductsPage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '3rem'
          }}
        >
          Our Products
        </motion.h1>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              onClick={() => handleProductClick(product)}
              onMouseEnter={() => addBubble(product.id)}
            >
              <ProductImage>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                />
                {bubbles.map(bubble => (
                  <BubbleEffect
                    key={bubble.id}
                    initial={{ 
                      x: `${bubble.x}%`,
                      y: "100%",
                      opacity: 0.8
                    }}
                    animate={{ 
                      y: "0%",
                      opacity: 0
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </ProductImage>
              <ProductInfo>
                <Badge variant={product.badge}>
                  {product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
                </Badge>
                <h2 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  color: 'var(--text)'
                }}>
                  {product.name}
                </h2>
                <p style={{ 
                  color: 'var(--text)',
                  opacity: 0.8
                }}>
                  {product.description}
                </p>
              </ProductInfo>
              <AnimatePresence>
                {selectedProduct?.id === product.id && (
                  <ProductDetails
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    theme={selectedProduct?.id === product.id ? 'dark' : 'light'}
                  >
                    <h3 style={{ 
                      fontSize: '1.8rem',
                      marginBottom: '1.5rem',
                      color: 'var(--text)'
                    }}>
                      Nutrition Facts
                    </h3>
                    <NutritionFact theme={selectedProduct?.id === product.id ? 'dark' : 'light'}>
                      <span>Calories</span>
                      <span>{product.nutrition.calories}</span>
                    </NutritionFact>
                    <NutritionFact theme={selectedProduct?.id === product.id ? 'dark' : 'light'}>
                      <span>Sugar</span>
                      <span>{product.nutrition.sugar}</span>
                    </NutritionFact>
                    <NutritionFact theme={selectedProduct?.id === product.id ? 'dark' : 'light'}>
                      <span>Caffeine</span>
                      <span>{product.nutrition.caffeine}</span>
                    </NutritionFact>
                  </ProductDetails>
                )}
              </AnimatePresence>
            </ProductCard>
          ))}
        </ProductsGrid>
      </motion.div>
    </ProductsPage>
  );
};

export default Products;