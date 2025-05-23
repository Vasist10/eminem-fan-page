import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const MotionLink = motion.create(Link);

const NavLink = styled(MotionLink)`
  color: #fff;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ff0000;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Eminem</Logo>
        <NavLinks>
          <NavLink 
            to="/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavLink>
          <NavLink 
            to="/music"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Music
          </NavLink>
          <NavLink 
            to="/concerts"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Concerts
          </NavLink>
          <NavLink 
            to="/about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </NavLink>
          <NavLink 
            to="/quiz"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Quiz
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 