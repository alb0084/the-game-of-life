import { grid } from "../models/Grid";


// import _ from 'lodash';
//initialise and return a first grid.
export const initGrid = (): grid => {
  const grid: number[][] = [];
  for (let i = 0; i <= 8; i++) {
    grid[i] = [];
    for (let j = 0; j <= 8; j++) {
      grid[i][j] = Math.random() <= 0.5 ? 1 : 0;
    }
  }
  return grid;
};
//compute and return a new grid.
export const computeNextGrid = (previousGrid: grid):grid => {
  const nextGrid = previousGrid;
  const rows: number = previousGrid[0].length;
  const cols: number = 9;
  const resultGrid = setupNewGrid(nextGrid,previousGrid,rows,cols);
  return resultGrid;
};

//internal method to count the neighbors of the current state (1->true, 0->false). 
const countNeighbors = (grid: grid, x: number, y: number): number => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      sum += grid[x + i][y + j];
    }
  }
  sum -= grid[x][y];
  return sum;
};

//carry out the operation for the new grid.
const setupNewGrid=(nextGrid:grid,previousGrid:grid,rows:number,cols:number)=>{
  for (let i = 0; i <= rows - 1; i++) {
    for (let j = 0; j <= cols - 1; j++) {
      let state = previousGrid[i][j];
      //Edge Boundary
      if (i === 0 || i === cols - 1 || j === 0 || j === rows - 1) {
        nextGrid[i][j] = state;
      } else {
        //count live neighbors
        let neighbors = countNeighbors(previousGrid, i, j);
        //check state and change with the accordingly rules:
        //Any dead cell with exactly three live neighbours becomes a live cell.
        if (state === 0 && neighbors === 3) {
          nextGrid[i][j] = 1;
        //Any live cell with fewer than two live neighbours dies ||
        //Any live cell with more than three live neighbours dies.
        } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
          nextGrid[i][j] = 0;
        //Any live cell with two or three live neighbours lives on to the next generation.
        } else if(state===1 && (neighbors===2 || neighbors===3)){
        }else {
          nextGrid[i][j] = state;
        }
      }
    }
  }
  return nextGrid;
};



