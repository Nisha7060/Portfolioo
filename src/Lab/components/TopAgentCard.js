import React from 'react';
import styled from 'styled-components';
import { FaCrosshairs, FaBolt, FaSkull } from 'react-icons/fa'; // Icons for stats
import image from './28npIkbEsTAkb-removebg-preview.png'
// Main Card
const Card = styled.div`
  background-color: #111826; /* Dark background */
  padding: 20px;
  border-radius: 15px;
  color: white;
  font-family: 'Rajdhani', sans-serif;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  max-width: 700px; /* Adjusted for layout */
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Container for all text and stats
const AgentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

// Text for "Top Agent"
const TopAgentText = styled.h4`
  font-size: 20px;
  color: #a6b1c4; /* Light gray for secondary heading */
  margin: 0;
`;

// Styling for Agent name (OMEN)
const AgentName = styled.h2`
  font-size: 48px;
  margin: 0;
  color: #f24141; /* Red color for agent name */
`;

// Text stats like Played time, Win Ratio, etc.
const StatText = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: #a6b1c4; /* Light gray for secondary text */
`;

// Flex container for icons and stat numbers
const StatsRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

// Individual stat container with icon
const StatIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #6e769e; /* Light color for icons */
`;

// Stat number next to the icon
const StatValue = styled.div`
  font-size: 18px;
  margin-left: 5px;
  color: white;
`;

// Image of the agent
const AgentImage = styled.img`
  width: 225px; /* Adjusted width for better layout */
  height: auto;
  object-fit: contain;
`;

// New container for "Ability Kills/Match"
const AbilityKillsText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: #a6b1c4;
`;

// Flex container for inline ratio stats
const InlineStatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Spacing between inline ratios */
  font-size: 16px;
  color: #a6b1c4; /* Light gray color for ratios */
`;

// Component function
const TopAgentCard = () => {
  return (
    <Card>
      <AgentInfo>
        <TopAgentText>TOP Hacker</TopAgentText> {/* Top Agent text */}
        <AgentName>ASHISH 
        <StatText>Played: 354H 46M</StatText>

        </AgentName>
        <hr/>
        {/* Inline stats for Win Ratio, K/D Ratio, and Dmg/Round */}
        <InlineStatsRow>
          <span>Win Ratio: 62.11%</span>
          <span>K/D Ratio: 1.14</span>
          <span>Dmg/Round: 138.2</span>
        </InlineStatsRow>

        {/* <StatsRow>
          <StatIcon>
            <FaBolt />
            <StatValue>0.33</StatValue>
          </StatIcon>
          <StatIcon>
            <FaSkull />
            <StatValue>0.78</StatValue>
          </StatIcon>
          <StatIcon>
            <FaCrosshairs />
            <StatValue>4.82</StatValue>
          </StatIcon>
        </StatsRow> */}

        {/* Ability Kills/Match section */}
        <AbilityKillsText>
          <StatText>Ability Kills/Match:</StatText>
          <StatsRow>
            <StatIcon>
              <FaBolt />
              <StatValue>0.33</StatValue> {/* Example stat */}
            </StatIcon>
            <StatIcon>
              <FaSkull />
              <StatValue>0.78</StatValue> {/* Example stat */}
            </StatIcon>
            <StatIcon>
              <FaCrosshairs />
              <StatValue>4.82</StatValue> {/* Example stat */}
            </StatIcon>
          </StatsRow>
        </AbilityKillsText>

      </AgentInfo>
      <AgentImage src={image} alt="Omen" />
    </Card>
  );
};

export default TopAgentCard;
