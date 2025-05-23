import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #000000, #1a0000, #000000);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
`;

const CenteredHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  margin-top: 4rem;
`;

const ButtonsSection = styled.div`
  display: flex;
  gap: 2rem;
  margin: 8rem 0 0 0;
  justify-content: center;
`;



const QuoteSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 2rem auto 3rem auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7);
`;



const QuoteText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  color: #fff;
  font-family: 'Anton', sans-serif;
  font-size: 1.7rem;
  text-shadow: 0 0 10px #000, 0 0 20px #ff0000;
  background: linear-gradient(0deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.05) 100%);
  text-align: center;
`;

const AchievementsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 2rem auto 0 auto;
  max-width: 700px;
`;

const Achievement = styled.div`
  background: rgba(0,0,0,0.7);
  border-radius: 12px;
  padding: 1.2rem 2rem;
  font-family: 'Anton', sans-serif;
  font-size: 1.3rem;
  color: #fff;
  box-shadow: 0 2px 12px rgba(255,0,0,0.15);
  text-align: center;
`;


const MotionDiv = motion.create('div');
const MotionLink = motion.create(Link);

const GlowingTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 5rem;
  color: #fff;
  text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #fff;
  margin: 0.5rem 0 0.2rem 0;
  text-align: center;
`;

const GlowingSubtitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 0 0 12px #ff0000, 0 0 24px #ff0000, 0 0 32px #fff;
  margin: 0.2rem 0 1.5rem 0;
  text-align: center;
`;

const CTAButton = styled(MotionLink)`
  display: inline-block;
  background: #ff0000;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 1rem;
  
  &:hover {
    background: #cc0000;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  max-width: 1200px;
  width: 100%;
`;

const FeatureCard = styled(MotionDiv)`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-family: 'Anton', sans-serif;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #fff;
  opacity: 0.9;
`;

const Home = () => {
  return (
    <HomeContainer>
      <CenteredHero>
        <GlowingTitle>EMINEM</GlowingTitle>
        <GlowingSubtitle>THE RAP GOD</GlowingSubtitle>
        <AchievementsSection>
          <Achievement>15 Grammy Awards</Achievement>
          <Achievement>220M+ Records Sold</Achievement>
          <Achievement>1 Oscar</Achievement>
          <Achievement>11 Studio Albums</Achievement>
        </AchievementsSection>
        <QuoteSection>
          <QuoteText>
            Nobody asked for life to deal us With these bullsh*t hands we're dealt<br />
            We gotta take these cards ourselves And flip 'em, don't expect no help.
          </QuoteText>
        </QuoteSection>
      </CenteredHero>
      <ButtonsSection>
        <CTAButton
          to="/music"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Listen Now
        </CTAButton>
        <CTAButton
          to="/concerts"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Tickets
        </CTAButton>
      </ButtonsSection>

      <FeaturesGrid>
        <FeatureCard
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <FeatureTitle>Latest Music</FeatureTitle>
          <FeatureDescription>
            Stream Eminem's latest tracks and classic hits
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <FeatureTitle>Tour Dates</FeatureTitle>
          <FeatureDescription>
            Catch Eminem live in concert across the world
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <FeatureTitle>Exclusive Content</FeatureTitle>
          <FeatureDescription>
            Get access to behind-the-scenes footage and interviews
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </HomeContainer>
  );
};

export default Home; 