function CurrentScoreDisplay() {
  return <div>current score</div>
}

function BestScoreDisplay() {
  return <div>best score</div>
}

export default function ScoreCard() {
  return (
    <div className="score-card">
      <CurrentScoreDisplay />
      <BestScoreDisplay />
    </div>
  )
};