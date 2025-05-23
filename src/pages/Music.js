import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
// Removed: import { motion } from 'framer-motion'; as it's no longer used

const MusicContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
`;

// Curtain Animations
const curtainOpenLeft = keyframes`
  to { transform: translateX(-100%); }
`;
const curtainOpenRight = keyframes`
  to { transform: translateX(100%); }
`;

const StagePlayerWrapper = styled.div`
  position: relative;
  width: 560px;
  height: 350px;
  margin: 2rem auto 2.5rem auto;
  background: #111;
  z-index: 1000;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Curtain = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 20;
  pointer-events: none;
  background: linear-gradient(90deg, #b3001b 80%, #a8001a 100%);
  box-shadow: ${({ side }) =>
    side === 'left'
      ? '4px 0 24px 0 rgba(0,0,0,0.25), inset -8px 0 16px 0 rgba(0,0,0,0.15)'
      : '-4px 0 24px 0 rgba(0,0,0,0.25), inset 8px 0 16px 0 rgba(0,0,0,0.15)'};
  opacity: 0.98;
  ${({ side, animate }) =>
    side === 'left' && css`
      left: 0;
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      transform: translateX(0);
      ${animate && css`
        animation: ${curtainOpenLeft} 2s cubic-bezier(0.77,0,0.18,1) forwards;
      `}
    `}
  ${({ side, animate }) =>
    side === 'right' && css`
      right: 0;
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      transform: translateX(0);
      ${animate && css`
        animation: ${curtainOpenRight} 2s cubic-bezier(0.77,0,0.18,1) forwards;
      `}
    `}
`;

const Stage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #222;
  z-index: 10;
`;

const StageScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Player = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
  background: #000;
  position: absolute;
  top: 0; left: 0;
  opacity: ${({ fade }) => (fade ? 1 : 0)};
  transition: opacity 0.5s;
  z-index: 16;
`;

// Removed EminemPlaceholderImg styled-component
// Removed PlaceholderText styled-component
// Removed CloseButton styled-component

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AlbumCard = styled.div`
  background: rgba(0,0,0,0.85);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumCover = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  background: #222;
`;

const AlbumTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
`;

const AlbumYear = styled.p`
  color: #ff0000;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;

const TrackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const TrackItem = styled.li`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.3rem;
  cursor: pointer;
  &:hover {
    color: #ff0000;
    text-decoration: underline;
  }
`;


const SelectSongText = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
`;

const Music = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [fadeVideo, setFadeVideo] = useState(false);
  const curtainTimeout = useRef();
  const fadeTimeout = useRef();

  const albums = [
    {
      title: 'Infinite',
      year: 1996,
      cover: require('../resources/infinite.jpg'),
      tracks: [
        { title: 'Infinite', youtubeId: 'QFcv5Ma8u8k' },
        { title: "It's OK", youtubeId: 'QFcv5Ma8u8k' },
      ],
    },
    {
      title: 'The Slim Shady LP',
      year: 1999,
      cover: require('../resources/The_Slim_Shady_cover.jpg'),
      tracks: [
        { title: 'My Name Is', youtubeId: 'sNPnbI1arSE' },
        { title: 'Guilty Conscience', youtubeId: '7bDf5jT-1hM' },
      ],
    },
    {
      title: 'The Marshall Mathers LP',
      year: 2000,
      cover: require('../resources/The_Marshall_Mathers_LP.jpg'),
      tracks: [
        { title: 'The Real Slim Shady', youtubeId: 'eJO5HU_7_1w' },
        { title: 'Stan', youtubeId: 'gOMhN-hfMtY' },
      ],
    },
    {
      title: 'The Eminem Show',
      year: 2002,
      cover: require('../resources/The_Eminem_Show.jpg'),
      tracks: [
        { title: 'Without Me', youtubeId: 'YVkUvmDQ3HY' },
        { title: "Cleanin' Out My Closet", youtubeId: 'RQ9_TKayu9s' },
      ],
    },
    {
      title: 'Encore',
      year: 2004,
      cover: require('../resources/Encore_(Eminem_album)_coverart.jpg'),
      tracks: [
        { title: 'Just Lose It', youtubeId: '9dcVOmEQzKA' },
        { title: 'Mockingbird', youtubeId: 'S9bCLPwzSC0' },
      ],
    },
    {
      title: 'Relapse',
      year: 2009,
      cover: require('../resources/relapse.jpg'),
      tracks: [
        { title: 'Beautiful', youtubeId: 'lgT1AidzRWM' },
        { title: 'We Made You', youtubeId: 'RSdKmX2BH7o' },
      ],
    },
    {
      title: 'Recovery',
      year: 2010,
      cover: require('../resources/Recovery_Album_Cover.jpg'),
      tracks: [
        { title: 'Not Afraid', youtubeId: 'j5-yKhDd64s' },
        { title: 'Love the Way You Lie', youtubeId: 'uelHwf8o7_U' },
      ],
    },
    {
      title: 'The Marshall Mathers LP 2',
      year: 2013,
      cover: require('../resources/The_Marshall_Mathers_LP_2.jpg'),
      tracks: [
        { title: 'Rap God', youtubeId: 'XbGs_qK2PQA' },
        { title: 'The Monster', youtubeId: 'EHkozMIXZ8w' },
      ],
    },
    {
      title: 'Revival',
      year: 2017,
      cover: require('../resources/Revival_Eminem_Cover.png'),
      tracks: [
        { title: 'Walk on Water', youtubeId: 'ryr75N0nki0' },
        { title: 'River', youtubeId: 'wXhTHyIgQ_U' },
      ],
    },
    {
      title: 'Kamikaze',
      year: 2018,
      cover: require('../resources/Eminem_-_Kamikaze.jpg'),
      tracks: [
        { title: 'Lucky You', youtubeId: 'xS_b4Lk2gRM' },
        { title: 'Venom', youtubeId: '8CdcCD5V-d8' },
      ],
    },
    {
      title: 'Music to Be Murdered By',
      year: 2020,
      cover: require('../resources/Eminem_-_Music_to_Be_Murdered_By.png'),
      tracks: [
        { title: 'Godzilla', youtubeId: 'r_0JjYUe5jo' },
        { title: 'Darkness', youtubeId: 'RHQC4fAhcbU' },
      ],
    },
    {
      title: 'The Death of Slim Shady (Coup de Grâce)',
      year: 2024,
      cover: require('../resources/Eminem_-_The_Death_of_Slim_Shady_(Coup_de_Grâce).png'),
      tracks: [
        { title: 'TBA', youtubeId: '' },
      ],
    },
  ];

  // Handle track click
  const handleTrackClick = (track, album) => {
    // Reset all animations
    setCurtainOpen(false);
    setFadeVideo(false);
    setSelectedSong({
      title: track.title,
      album: album.title,
      image: album.cover,
      youtubeId: track.youtubeId
    });
    // Animate curtains after a short delay to allow reset
    clearTimeout(curtainTimeout.current);
    clearTimeout(fadeTimeout.current);
    curtainTimeout.current = setTimeout(() => {
      setCurtainOpen(true);
      // After curtain opens (2s), fade in video (corrected logic to fade in, not out)
      fadeTimeout.current = setTimeout(() => {
        setFadeVideo(true); // Video becomes visible after curtains open
      }, 2000); // This should match curtain animation time or be slightly after
    }, 50);
  };

  // If user selects a new track, always restart the animation
  React.useEffect(() => {
    return () => {
      clearTimeout(curtainTimeout.current);
      clearTimeout(fadeTimeout.current);
    };
  }, []);

  return (
    <MusicContainer>
      <StagePlayerWrapper>
        <Curtain side="left" animate={curtainOpen} />
        <Curtain side="right" animate={curtainOpen} />
        <Stage />
        <StageScreen>
          {selectedSong && (
            <Player
              fade={fadeVideo}
              src={`https://www.youtube.com/embed/${selectedSong.youtubeId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedSong.title}
            />
          )}
        </StageScreen>
      </StagePlayerWrapper>
      {!selectedSong && <SelectSongText>Select a song to play</SelectSongText>}
      <AlbumsGrid>
        {albums.map((album) => (
          <AlbumCard key={album.title}>
            <AlbumCover src={album.cover} alt={album.title} />
            <AlbumTitle>{album.title}</AlbumTitle>
            <AlbumYear>{album.year}</AlbumYear>
            <TrackList>
              {album.tracks.map((track, idx) => (
                <TrackItem
                  key={track.title}
                  onClick={() => handleTrackClick(track, album)}
                >
                  {idx + 1}. {track.title}
                </TrackItem>
              ))}
            </TrackList>
          </AlbumCard>
        ))}
      </AlbumsGrid>
    </MusicContainer>
  );
};

export default Music;