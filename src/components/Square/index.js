import '../Grid/grid.css';

const Square = ({
  value,
  onClick,
}) => {
  let color = '';
  value ? color = 'blue' : color = 'white';
  return (
    <div
      className={`square ${color}`}
      onClick={onClick}
    >
        
      </div>
  )
}

export default Square;
