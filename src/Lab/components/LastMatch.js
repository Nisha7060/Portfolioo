import React from 'react';
import '../styles/LastMatch.css';
import moment from 'moment'; // We'll use moment.js to handle date formatting

const LastMatch = () => {
  const matches = [
    {
      map: 'ICEBOX',
      score: '13 : 11',
      kda: '24 / 16 / 12',
      profileImg: 'http://172.16.146.162:3000/static/media/ashi.5d5befec485a30a55d09.png',
      created_at: '2024-10-12T10:00:00Z', // Today’s date
      updated_at: '2024-10-12T10:00:00Z',
    },
    {
      map: 'BREEZE',
      score: '13 : 7',
      kda: '21 / 11 / 7',
      profileImg: 'http://172.16.146.162:3000/static/media/ashi.5d5befec485a30a55d09.png',
      created_at: '2024-10-12T08:00:00Z', // Today’s date
      updated_at: '2024-10-12T08:00:00Z',
    },
    {
      map: 'ICEBOX',
      score: '13 : 6',
      kda: '35 / 22 / 9',
      profileImg: 'http://172.16.146.162:3000/static/media/ashi.5d5befec485a30a55d09.png',
      created_at: '2024-06-26T12:00:00Z', // Earlier date
      updated_at: '2024-06-26T12:00:00Z',
    },
    {
      map: 'ASCENT',
      score: '11 : 13',
      kda: '29 / 11 / 12',
      profileImg: 'http://172.16.146.162:3000/static/media/ashi.5d5befec485a30a55d09.png',
      created_at: '2024-06-26T09:00:00Z', // Earlier date
      updated_at: '2024-06-26T09:00:00Z',
    },
    {
      map: 'BIND',
      score: '13 : 13',
      kda: '27 / 19 / 3',
      profileImg: 'http://172.16.146.162:3000/static/media/ashi.5d5befec485a30a55d09.png',
      created_at: '2024-06-27T07:00:00Z', // Earlier date
      updated_at: '2024-06-27T07:00:00Z',
    },
  ];

  // Group matches by date
  const today = moment().startOf('day'); // Today’s date starting at midnight
  const groupedMatches = {
    today: [],
    past: {},
  };

  matches.forEach(match => {
    const matchDate = moment(match.created_at).startOf('day');
    if (matchDate.isSame(today)) {
      groupedMatches.today.push(match);
    } else {
      const formattedDate = matchDate.format('DD MMMM'); // Format like "27 June"
      if (!groupedMatches.past[formattedDate]) {
        groupedMatches.past[formattedDate] = [];
      }
      groupedMatches.past[formattedDate].push(match);
    }
  });

  return (
    <div className="last-match-container">
      <div className="header">
        <h2>New Hacker</h2>
        <a href="/" className="view-all">View All Matches</a>
      </div>
      <div className="match-list">
        {/* Render Today's matches */}
        {groupedMatches.today.length > 0 && (
          <>
            <div className="section-title">Today</div>
            {groupedMatches.today.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </>
        )}

        {/* Render Past matches grouped by date */}
        {Object.keys(groupedMatches.past).map(date => (
          <div key={date}>
            <div className="section-title">{date}</div>
            {groupedMatches.past[date].map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for individual match card
const MatchCard = ({ match }) => {
  return (
    <div className="match-item">
      <img src={match.profileImg} alt={match.map} className="profile-img" />
      <div className="match-details">
        <div className="map-name">{match.map}</div>
        <div className="score">{match.score}</div>
        <div className="kda">K / D / A {match.kda}</div>
      </div>
      <div className="rank-icon">
        {/* Placeholder for rank icon */}
      </div>
    </div>
  );
};

export default LastMatch;
