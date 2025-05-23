import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ConcertsContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
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

const ConcertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ConcertCard = styled(MotionDiv)`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;
`;

const ConcertDate = styled.h3`
  font-family: 'Anton', sans-serif;
  color: #fff;
  margin-bottom: 1rem;
`;

const ConcertLocation = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #fff;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const ConcertPrice = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #ff0000;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const BookButton = styled.button`
  background: #ff0000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease;
  
  &:hover {
    background: #cc0000;
  }
`;


const Concerts = () => {
  

  const concerts = [
    {
      id: 1,
      date: 'June 15, 2024',
      location: 'Madison Square Garden, New York',
      price: '$150'
    },
    {
      id: 2,
      date: 'June 20, 2024',
      location: 'Staples Center, Los Angeles',
      price: '$175'
    },
    {
      id: 3,
      date: 'June 25, 2024',
      location: 'United Center, Chicago',
      price: '$160'
    }
  ];

  return (
    <ConcertsContainer>
      <Title>Upcoming Concerts</Title>
      <ConcertGrid>
        {concerts.map((concert) => (
          <ConcertCard
            key={concert.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ConcertDate>{concert.date}</ConcertDate>
            <ConcertLocation>{concert.location}</ConcertLocation>
            <ConcertPrice>{concert.price}</ConcertPrice>
            <BookButton onClick={() => alert('Booking feature coming soon!')}>
              Book Tickets
            </BookButton>
          </ConcertCard>
        ))}
      </ConcertGrid>
    </ConcertsContainer>
  );
};

export default Concerts; 