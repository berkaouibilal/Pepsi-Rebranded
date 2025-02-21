import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialSection = styled.section`
  background: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const SocialLink = styled(motion.a)`
  color: var(--pepsi-blue);
  font-size: 2rem;
  transition: var(--transition);

  &:hover {
    color: var(--pepsi-red);
  }
`;

const socialLinks = [
  { icon: FaFacebook, url: 'https://facebook.com/pepsi' },
  { icon: FaTwitter, url: 'https://twitter.com/pepsi' },
  { icon: FaInstagram, url: 'https://instagram.com/pepsi' },
  { icon: FaTiktok, url: 'https://tiktok.com/@pepsi' }
];

const SocialMedia = () => {
  return (
    <SocialSection>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Connect With Us
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          Follow us on social media for the latest updates
        </p>
        <SocialGrid>
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <social.icon />
            </SocialLink>
          ))}
        </SocialGrid>
      </motion.div>
    </SocialSection>
  );
};

export default SocialMedia;