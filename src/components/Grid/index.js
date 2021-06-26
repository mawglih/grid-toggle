import { useState } from 'react';
import Square from '../../components/Square';
import './grid.css';

const Grid = ({
  width,
}) => {
  const [squares, setSquares] = useState(Array(width * width).fill(false));
  const toggleSquares = (squares, i) => {
    const nextSquares = [...squares];
    nextSquares[i] = !nextSquares[i];
    setSquares(nextSquares);
  }
  // console.log('squares', squares);
  // const renderCell = i => {
  //   return (
  //     <Square
  //       value = {squares[i]}
  //       onClick={() => toggleSquares(squares, i)}
  //       key={i}
  //     />
  //   )
  // }
  const createGrid = () => {
    const arr = Array.from(Array(width*width).keys());
    return arr.map(i => {
      return (
      <Square
        value = {squares[i]}
        onClick={() => toggleSquares(squares, i)}
        key={i}
      />);
    })
  }
  return (
    <div className="container">
      <div className="grid">
        {createGrid()}
      </div>
    </div>
  )
}

export default Grid;
