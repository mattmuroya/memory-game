import './scss/App.scss';

import TitleCard from './components/TitleCard';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="container">
      <main>
        <TitleCard />
        <ScoreCard />
        <GameBoard />
      </main>
    </div>
  );
}

export default App;
