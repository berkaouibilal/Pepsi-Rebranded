/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  padding: 2rem;
  background: var(--background);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-highlight);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const Content = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: var(--button);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.05);
    background: var(--button-hover);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const About = () => {
  return (
    <AboutContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title>
        About Pepsi
      </Title>
      <Content>
            Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as Brad\'s Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961.
      </Content>
      <Button>Learn More</Button>
    </AboutContainer>
  );
};

export default About;
