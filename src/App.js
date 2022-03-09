import { useEffect, useState } from 'react';
import './scss/App.scss';

import TitleCard from './components/TitleCard';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';

function App() {

  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [tileArray, setTileArray] = useState([0,1,2,3,4,5,6,7,8]);

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
