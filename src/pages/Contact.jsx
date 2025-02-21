import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
  padding: 2rem;
  background: var(--background);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 1;
  }
`;

const Form = styled.form`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-highlight);
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--shadow);
  border-radius: 5px;
  font-size: 1rem;
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
  }
`;
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name === 'name') setName(value);
    if(name === 'email') setEmail(value);
    if(name === 'message') setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContactContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={name} 
          onChange={handleInputChange} 
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={handleInputChange} 
          required 
        />
        <Input 
          type="text" 
          name="message" 
          placeholder="Your Message" 
          value={message} 
          onChange={handleInputChange} 
          required 
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
