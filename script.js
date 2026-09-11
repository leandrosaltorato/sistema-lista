const input = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const lista = document.getElementById("lista-tarefas");
const estadoVazio = document.getElementById("estado-vazio");
const progresso = document.getElementById("progresso");

function adicionarTarefa() {
  const texto = input.value.trim();

  if (texto === "") {
    return;
  }

  const item = document.createElement("li");

  const check = document.createElement("button");
  check.className = "check";

  const span = document.createElement("span");
  span.textContent = texto;

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "✕";
  btnRemover.className = "btn-remover";

  check.addEventListener("click", () => {
    item.classList.toggle("concluida");
    atualizarProgresso();
  });

  btnRemover.addEventListener("click", () => {
    item.remove();
    atualizarProgresso();
  });

  item.appendChild(check);
  item.appendChild(span);
  item.appendChild(btnRemover);
  lista.appendChild(item);

  input.value = "";
  input.focus();

  atualizarProgresso();
}

function atualizarProgresso() {
  const total = lista.children.length;
  const concluidas = lista.querySelectorAll("li.concluida").length;

  estadoVazio.style.display = total === 0 ? "block" : "none";

  progresso.textContent =
    total === 0 ? "" : `${concluidas} de ${total} concluídas`;
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

input.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});

atualizarProgresso();
