function Tile(props) {

  const classes = `tile ${props.color}`

  return (
    <div className={classes}>
      {props.content}
    </div>
  )
}

export default function GameBoard({ tileArray }) {

  const arr = tileArray;

  return (
    <div className="game-board">
      {
        arr.map((element) => <Tile key={element} color={element.color} content={element.color} />)
      }
    </div>
  )
};