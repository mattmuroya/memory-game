function Tile(props) {

  const classes = `tile ${props.color}`

  return (
    <div
      data-index={props.index}
      id={props.color}
      className={classes}
      onClick={props.clickHandler}
    >
      {props.content}
    </div>
  )
}

export default function GameBoard(props) {

  const arr = props.tileArray;

  return (
    <div id="game-board" className="game-board">
      {
        arr.map((element, index) => {
          return (
            <Tile
              key={index}
              index={index}
              color={element.color}
              content={element.color}
              clickHandler={props.clickHandler} />
          );
        })
      }
    </div>
  )
};