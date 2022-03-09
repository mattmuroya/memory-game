import { useEffect } from "react"

function HighScoreDisplay({ highScore }) {
  return <div>Best Score: {highScore}</div>
}

function CurrentScoreDisplay({ currentScore }) {
  return <div>Current Score: {currentScore}</div>
}

export default function ScoreCard({ highScore, currentScore }) {

  
  return (
    <div className="score-card">
      <HighScoreDisplay highScore={highScore} />
      <CurrentScoreDisplay currentScore={currentScore} />
    </div>
  )
};