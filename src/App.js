import { useEffect, useState } from 'react';
import './scss/App.scss';

import TitleCard from './components/TitleCard';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';

function App() {

  const defaultArray = [
    {
      color: 'red',
      isClicked: false,
    },
    {
      color: 'green',
      isClicked: false,
    },
    {
      color: 'blue',
      isClicked: false,
    },
    {
      color: 'yellow',
      isClicked: false,
    },
    {
      color: 'purple',
      isClicked: false,
    },
    {
      color: 'orange',
      isClicked: false,
    },
    {
      color: 'teal',
      isClicked: false,
    },
    {
      color: 'pink',
      isClicked: false,
    },
    {
      color: 'black',
      isClicked: false,
    },
  ]

  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [tileArray, setTileArray] = useState([...defaultArray]);

  useEffect(() => { // every time tileArray updates check if won
    if (tileArray.every((element) => element.isClicked)) {
      alert ('you win!');
      resetTiles();
    }
  }, [tileArray]);

  function hasBeenClicked(e) {
    const clickedTile = tileArray.find(element => element.color === e.target.id);
    return clickedTile.isClicked;
  }

  function shuffleTiles() {
    const newArray = tileArray;
    setTileArray([...newArray.sort(() => (Math.random() > .5) ? 1 : -1)]);
  }

  function resetTiles() {
    setTileArray([...defaultArray]);
  }

  function handleClick(e) {
    if (hasBeenClicked(e)) {
      alert('u loser');
      resetTiles();
    } else {
      const newTileArray = tileArray;
      newTileArray[e.target.dataset.index].isClicked = true;
      setTileArray([...newTileArray]);
      shuffleTiles();
    }
  }

  return (
    <div className="container">
      <main>
        <TitleCard />
        <ScoreCard
          highScore={highScore}
          currentScore={currentScore}
        />
        <GameBoard tileArray={tileArray} clickHandler={handleClick}/>
      </main>
    </div>
  );
}

export default App;
