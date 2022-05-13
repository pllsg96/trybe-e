const chessMoves = "PAwns";

switch (chessMoves.toLowerCase()) {
  case "king":
    console.log("Move 1 square any direction");
    break;
  
  case "queen":
    console.log("Any direction, any squares");
    break;
  
  case "bishop":
    console.log("Diagonals");
    break;
  
  case "knights":
    console.log("L shape");
    break;
  
  case "pawns":
    console.log("1 square vertically foward");
    break;
  default:
    console.log("Error, invalid piece");
}