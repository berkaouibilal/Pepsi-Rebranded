import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1000;
  background: var(--card-bg);
  color: var(--text);
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 10px var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;