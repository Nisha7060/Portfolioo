// src/components/Sidebar.js
import React from 'react';
import { FaTrophy, FaUser, FaChartPie, FaBook, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 89.4vh;
  width: 80px;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconList>
        <FaChartPie size={24} color="white" />
        <FaUser size={24} color="white" />
        <FaBook size={24} color="white" />
        <FaTrophy size={24} color="white" />
        <FaCog size={24} color="white" />
      </IconList>
    </SidebarContainer>
  );
};

export default Sidebar;
