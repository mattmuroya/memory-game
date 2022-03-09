function Tile(props) {
  return (
    <div className="tile">
      {props.content}
    </div>
  )
}

export default function GameBoard({ tileArray }) {

  const arr = tileArray;

  return (
    <div className="game-board">
      {
        arr.map((element) => <Tile key={element} content={element} />)
      }
    </div>
  )
};