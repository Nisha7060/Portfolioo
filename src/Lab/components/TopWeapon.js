import React from 'react';
import '../styles/TopWeapon.css'; // If you want to add custom styles

const TopWeapon = () => {
  const weapons = [
    {
      name: 'Vandal',
      kills: 56,
      headshotPercentage: '30%',
      accuracy: '45%',
    },
    {
      name: 'Phantom',
      kills: 48,
      headshotPercentage: '28%',
      accuracy: '42%',
    },
    {
      name: 'Operator',
      kills: 32,
      headshotPercentage: '75%',
      accuracy: '85%',
    },
    {
      name: 'Sheriff',
      kills: 20,
      headshotPercentage: '65%',
      accuracy: '55%',
    },
    {
      name: 'Spectre',
      kills: 35,
      headshotPercentage: '22%',
      accuracy: '40%',
    },
  ];

  return (
    <div className="top-weapon-container">
      <h2>Top Weapons</h2>
      <ul className="weapon-list">
        {weapons.map((weapon, index) => (
          <li key={index} className="weapon-item">
            <div className="weapon-name">{weapon.name}</div>
            <div className="weapon-details">
              <span className="kills">Kills: {weapon.kills}</span>
              <span className="headshot-percentage">
                Headshot %: {weapon.headshotPercentage}
              </span>
              <span className="accuracy">Accuracy: {weapon.accuracy}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopWeapon;
