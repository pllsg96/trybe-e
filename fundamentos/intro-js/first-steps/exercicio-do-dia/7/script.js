let note = 105;

if (note >= 90 && note < 100) {
  console.log("A");
}

else if (note >= 80 && note < 90) {
  console.log("B");
}

else if (note >= 70 && note < 80) {
  console.log("C");
}

else if (note >= 60 && note < 70) {
  console.log("D");
}

else if (note >= 50 && note < 60) {
  console.log("E");
}

else if (note < 50) {
  console.log("F");
}

else{
  console.log("Error, % is out from range");
}