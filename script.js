const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Função para adicionar uma nova tarefa
function addTask() {
  if (inputBox.value === "") {
    alert("você deve escrever uma tarefa!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Cria um elemento <span> para o botão de remover (X)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    // Adiciona o botão de excluir à tarefa
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// Evento que escuta cliques no container da lista
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Alterna a classe "checked" para marcar/desmarcar a tarefa
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// Função para salvar o conteúdo da lista no localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// Função para exibir as tarefas salvas ao carregar a página
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
// Chama a função para restaurar as tarefas ao iniciar
showTask();
