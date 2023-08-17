document.getElementById("botao").addEventListener("click", function () {
    const data = document.getElementById("data").value;
    const data1 = new Date(data);
    const month = data1.getMonth();
    let season = "";
  

  switch (month) {
    case 1:
    case 2:
    case 12:
      season = "Verão";
      break;
    case 3:
    case 4:
    case 5:
      season = "Outono";
      break;
    case 6:
    case 7:
    case 8:
      season = "Inverno";
      break;
    case 9:
    case 10:
    case 11:
      season = "Primavera";
      break;
    default:
      season = "Mês inválido";
  }

  document.getElementById("resultado").innerText = "A estação do ano para a data é: " + season;
});

  