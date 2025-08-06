let alunos = {};
const button = document.querySelector("#button");
button.addEventListener("click", (event) => {
  event.preventDefault();

  let nome = document.getElementsByName("nome")[0].value;
  let nota = document.getElementsByName("nota")[0].value;
  nota = Number(nota);

  if (nome in alunos) {
    alunos[nome].push(nota);
  } else {
    alunos[nome] = [nota];
  }

  atualizar_lista();
  const ul = document.querySelector("#lista");
  const li_lista = ul.childNodes;
  li_lista.forEach((element) => {
    element.onclick = function () {
    let nome = element.id
    };
  });
});

function atualizar_lista() {
  const ul = document.querySelector("#lista");
  ul.innerHTML = "";
  let tamanho = Object.entries(alunos).length;
  for (let i = 0; i < tamanho; i++) {
    const li = document.createElement("li");
    li.innerHTML = Object.keys(alunos)[i];
    li.id = Object.keys(alunos)[i];
    ul.appendChild(li);
  }
}
