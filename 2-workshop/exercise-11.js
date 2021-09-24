const exercise10 = require("./exercise-10");

function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  //The Expected result from tests has a , at the end. So it fails. 
  //I broke up the problem into a grid, if the row and column are both even or odd, there is a # and vice versa
  let maxRow = 8;
  let str='';
  for(let i=0;i<maxRow;i++){
    for(let j=0;j<maxRow;j++){
      if(i%2===0&&j%2===0||i%2===1&&j%2===1){
        str+='#';
      }
      else if(i%2===1&&j%2===0||i%2===0&&j%2===1){
        str+='_';
      }
      if(j===maxRow-1){
        console.log(str);
        str='';
      }
    }


    
  }
  console.log(str);

      
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11
//exercise11();
module.exports = exercise11;
