import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialSection = styled.section`
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
  color: var(--link-color);
  font-size: 2rem;
  transition: var(--transition);

  &:hover {
    color: var(--pepsi-red);
  }
`;

const socialLinks = [
  { icon: FaFacebook, url: 'https://facebook.com/berkaouibilaldev' },
  { icon: FaTwitter, url: 'https://x.com/thatbilal' },
  { icon: FaGithub, url: 'https://github.com/berkaouibilal' }
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
          Liked the project?
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          Contact me on social media to discuss your project.
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