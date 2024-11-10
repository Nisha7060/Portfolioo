// src/components/CompetitiveOverview.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.accent};
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

const OverviewStat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CompetitiveOverview = () => {
  return (
    <Card>
      <h3>Competitive Overview</h3>
      <OverviewStat>
        <p>Win Rate</p>
        <p>62.5%</p>
      </OverviewStat>
      <OverviewStat>
        <p>Wins</p>
        <p>925</p>
      </OverviewStat>
      <OverviewStat>
        <p>Losses</p>
        <p>791</p>
      </OverviewStat>
    </Card>
  );
};

export default CompetitiveOverview;
