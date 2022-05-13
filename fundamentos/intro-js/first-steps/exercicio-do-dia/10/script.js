const costValue = -9;
const sellValue = 15;
const lucro = sellValue - costValue - (costValue * 0.2);

if (costValue < 0 || sellValue < 0) {
  console.log("Valores abaixo de 0 são incompatíveis, tente novamente.");
}

else {
  console.log("Lucro obtido: %d.", (lucro * 1000));
}







