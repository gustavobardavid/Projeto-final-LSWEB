window.addEventListener("load", () => {
    fetch("http://localhost:3000/partidas")
      .then((resposta) => resposta.json())
      .then((partidas) => {
        carregarPartidas(partidas);
      });
  });
  
  function carregarPartidas(partida) {
    const listaPartidas = document.querySelector("#partidas");
    for (const partida of partidas) {
      const itemPartida = document.createElement("li");
      itemPartida.textContent = `${partida.titulo} - ${partida.local} - ${partida.data}`;
      listaPartidas.appendChild(itemPartida);
    }
  }
  
const botaomarcar = document.queryselector("#marcar");
const inputdata = document.queyselector("#data");
const inputlocal  = document.queryselector("#local");
const inputtitulo = document.querySelector("#titulo");
    
botaomarcar.addEventListener("click" , () => {
    let titulo = String(inputtitulo.value);
    let data = inputdata.value;
    let local = String(inputlocal.value);
    
    const partida = {
            'titulo': titulo,
            'local': local,
            'data': data 
        }
        partidas.push(partida);
    })