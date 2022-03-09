import { useEffect, useState } from 'react';
import './scss/App.scss';

import TitleCard from './components/TitleCard';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';

function App() {

  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [tileArray, setTileArray] = useState([
    {
      color: 'red',
      clicked: false,
    },
    {
      color: 'green',
      click: false,
    },
    {
      color: 'blue',
      clicked: false,
    },
    {
      color: 'yellow',
      clicked: false,
    },
    {
      color: 'purple',
      clicked: false,
    },
    {
      color: 'orange',
      clicked: false,
    },
    {
      color: 'teal',
      clicked: false,
    },
    {
      color: 'pink',
      clicked: false,
    },
    {
      color: 'black',
      clicked: false,
    },
  ]);

  return (
    <div className="container">
      <main>
        <TitleCard />
        <ScoreCard
          highScore={highScore}
          currentScore={currentScore}
        />
        <GameBoard tileArray={tileArray} />
      </main>
    </div>
  );
}

export default App;
