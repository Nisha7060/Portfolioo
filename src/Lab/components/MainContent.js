// src/components/MainContent.js
import React from 'react';
import styled from 'styled-components';
import TopAgentCard from './TopAgentCard';
import CompetitiveOverview from './CompetitiveOverview';
import LastMatch from './LastMatch';
import TopWeapon from './TopWeapon';

const MainContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <div>
        <TopAgentCard />
        <CompetitiveOverview />
      </div>
      <div>
        <LastMatch />
        {/* <TopWeapon /> */}
      </div>
    </MainContainer>
  );
};

export default MainContent;
