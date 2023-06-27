window.addEventListener('load' , carregarPartidas);

let tbody = document.querySelector('tbody');
let addForm = document.querySelector('.add-form');

let inputPartida = document.querySelector('.input-partida');
let inputLocal = document.querySelector('.input-local');
let inputData= document.querySelector('.input-data');

const addPartida = async () => {

    const partida = { title: inputPartida.value, local: inputLocal.value, data: inputData.value};

    await fetch('http://localhost:3000/partidas' , {
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(partida),
    })
}

const deletarPartida = async (id) => {
    await fetch(`http://localhost:3000/partidas/${id}` , {
    method:'delete'
    });
    
    carregarPartidas();
};

const fetchPartidas = async () => {
  const resposta = await fetch('http://localhost:3000/partidas');
  const partidas = await resposta.json();
  return partidas;
}

function createElement (tag, textContent = '', innerHTML = '') {
    const element = document.createElement(tag);

    if(textContent) {
      element.textContent = textContent;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
}

function criarLinha(partida) {
  const { id, title, local , data} = partida; 
  const tr = createElement('tr');
  const tdTitle = createElement('td' , title);
  const tdLocal = createElement('td' , local);  
  const tdData = createElement('td' , data);
  const tdAções = createElement('td');

  const editButton = createElement('button' , '', '<span class="material-symbols-outlined">edit_calendar</span>');
  const deleteButton = createElement('button' , '', '<span class="material-symbols-outlined">delete</span>');
  
  deleteButton.addEventListener('click' , ()=> {
      
    deletarPartida(id)
    
  });

  editButton.classList.add('btn-action');
  deleteButton.classList.add('btn-action');
  tdAções.appendChild(editButton);
  tdAções.appendChild(deleteButton);
  tr.appendChild(tdTitle);
  tr.appendChild(tdLocal);
  tr.appendChild(tdData);
  tr.appendChild(tdAções);
  
  return tr;
}

async function carregarPartidas() {
    const partidas = await fetchPartidas();
    tbody.replaceChildren(...[]);
    partidas.forEach(partida => {
        const tr = criarLinha(partida);
        tbody.appendChild(tr);
    });
}
//p
addForm.addEventListener('submit', () => {
  addPartida();
  carregarPartidas();
});

