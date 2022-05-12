const desafioFisico = 86;

if (desafioFisico >= 80) {
  console.log("Parabéns, você foi aprovado(a)");
}

else if (desafioFisico <= 80 || desafioFisico == 60) {
  console.log("Você está na nossa lista de espera.");
}

else if(desafioFisico < 60) {
  console.log("Você foi reprovado(a)");
}