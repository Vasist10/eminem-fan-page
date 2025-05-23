import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
`;

const MotionDiv = motion.create('div');

const Content = styled(MotionDiv)`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  color: #fff;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #fff;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled(MotionDiv)`
  background: rgba(255, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
`;

const StatNumber = styled.h3`
  font-family: 'Anton', sans-serif;
  color: #ff0000;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #fff;
  opacity: 0.8;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Eminem</Title>
      
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Early Life</SectionTitle>
        <Text>
          Marshall Bruce Mathers III, known professionally as Eminem, was born on October 17, 1972, in St. Joseph, Missouri. 
          Growing up in Detroit, Michigan, he faced numerous challenges in his early life, including poverty and family issues.
        </Text>
        <Text>
          Despite these obstacles, Eminem developed a passion for hip-hop at a young age. He began participating in rap battles 
          and eventually caught the attention of Dr. Dre, which led to his breakthrough in the music industry.
        </Text>
      </Content>

      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Career</SectionTitle>
        <Text>
          Eminem's career took off with the release of "The Slim Shady LP" in 1999, which won him his first Grammy Award. 
          His subsequent albums, including "The Marshall Mathers LP" and "The Eminem Show," solidified his position as one of 
          the most influential rappers in history.
        </Text>
        <Text>
          Known for his technical rapping ability, complex rhyme schemes, and controversial lyrics, Eminem has sold over 220 
          million records worldwide, making him one of the best-selling music artists of all time.
        </Text>
      </Content>

      <StatsGrid>
        <StatCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <StatNumber>15</StatNumber>
          <StatLabel>Grammy Awards</StatLabel>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <StatNumber>220M+</StatNumber>
          <StatLabel>Records Sold</StatLabel>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <StatNumber>11</StatNumber>
          <StatLabel>Studio Albums</StatLabel>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <StatNumber>1</StatNumber>
          <StatLabel>Oscar Award</StatLabel>
        </StatCard>
      </StatsGrid>
    </AboutContainer>
  );
};

export default About; 