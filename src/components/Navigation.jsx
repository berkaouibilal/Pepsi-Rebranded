import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(10, 25, 41, 0.85)'
    : 'rgba(255, 255, 255, 0.85)'
  };
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'
  };
  box-shadow: 0 4px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 75, 147, 0.1)'
  };
  transition: var(--transition);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.img)`
  height: 40px;
  filter: ${props => props.theme === 'dark' ? 'none' : 'none'};
  transition: var(--transition);
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: var(--text);
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(10, 25, 41, 0.98)'
    : 'rgba(255, 255, 255, 0.98)'
  };
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 99;
`;

const MobileNavLink = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text);
  padding: 1rem 2rem;
  border-radius: 12px;
  background: ${props => props.theme === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 75, 147, 0.1)'
  };
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.15)'
      : 'rgba(0, 75, 147, 0.15)'
    };
    transform: scale(1.05);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: var(--text);
  font-size: 1.5rem;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    background: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 75, 147, 0.1)'
    };
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 75, 147, 0.1)'
  };
  color: var(--text);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.15)'
      : 'rgba(0, 75, 147, 0.15)'
    };
  }
`;

const ThemeDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 4px 20px var(--shadow);
  overflow: hidden;
`;

const ThemeOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  color: var(--text);
  font-weight: 500;
  text-align: left;
  transition: var(--transition);

  &:hover {
    background: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 75, 147, 0.1)'
    };
  }
`;

const Navigation = ({ theme, toggleTheme }) => {
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItems = ['Home','Products', 'About', 'Contact'];

  return (
    <Nav theme={theme}>
      <NavContainer>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Logo 
              src="https://www.pepsi.com/assets/images/pepsi-logos/logo-0.png"
              alt="Pepsi"
              theme={theme}
              whileHover={{ scale: 1.05,
                transition: { duration: 0.1 },
                rotate: [0, 180, 240, 360, 0]
               }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </motion.div>
        <NavGroup>
          <NavLinks>
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                theme={theme}>
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </NavLinks>
          <div style={{ position: 'relative' }}>
            <ThemeButton
              theme={theme}
              onClick={() => setShowThemeDropdown(!showThemeDropdown)}
            >
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
              Theme
              <FaChevronDown />
            </ThemeButton>
            <AnimatePresence>
              {showThemeDropdown && (
                <ThemeDropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ThemeOption
                    theme={theme}
                    onClick={() => {
                      toggleTheme('light');
                      setShowThemeDropdown(false);
                    }}
                  >
                    <FaSun /> Light
                  </ThemeOption>
                  <ThemeOption
                    theme={theme}
                    onClick={() => {
                      toggleTheme('dark');
                      setShowThemeDropdown(false);
                    }}
                  >
                    <FaMoon /> Dark
                  </ThemeOption>
                </ThemeDropdown>
              )}
            </AnimatePresence>
          </div>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </MobileMenuButton>
        </NavGroup>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            theme={theme}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <CloseButton
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </CloseButton>
            {menuItems.map((item, index) => (
              <MobileNavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                theme={theme}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navigation;
