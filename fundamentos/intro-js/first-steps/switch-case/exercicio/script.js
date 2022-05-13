let processoSeletivo = "reprovada";

switch (processoSeletivo) {
  case "aprovada":
    console.log("Siga");
    break;
    case "lista":
      console.log("Atenção");
      break;
    case "reprovada":
      console.log("Pare");
      break;
  default:
    console.log("Não se aplica");
}