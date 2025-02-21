import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NewsletterSection = styled.section`
  background: var(--pepsi-blue);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const NewsletterForm = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--pepsi-red);
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  transition: var(--transition);

  &:hover {
    background: #ff1a1a;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('subscribed');
    setEmail('');
  };

  return (
    <NewsletterSection>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Stay Refreshed
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Subscribe to our newsletter for exclusive offers and updates
        </p>
        <NewsletterForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </SubmitButton>
        </NewsletterForm>
        {status === 'subscribed' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: '#4CAF50', marginTop: '1rem' }}
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </motion.div>
    </NewsletterSection>
  );
};

export default Newsletter;