import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import '@fontsource/anton';
import '@fontsource/poppins';
import '@fontsource/roboto';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Concerts from './pages/Concerts';
import Music from './pages/Music';
import About from './pages/About';
import Quiz from './pages/Quiz';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000, #1a0000, #000000);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
