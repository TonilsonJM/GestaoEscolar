// Obtém referências ao formulário, tabela e mensagem de sucesso
const form = document.getElementById("form-novo-aluno");
const listaAlunos = document.getElementById("lista-alunos");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

// Adiciona um evento ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const turma = document.getElementById("turma").value;
  const email = document.getElementById("email").value;

  // Cria uma nova linha para a tabela de alunos
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${idade} anos</td>
    <td>${turma}</td>
    <td>${email}</td>
  `;

  // Adiciona a nova linha à tabela
  listaAlunos.appendChild(novaLinha);

  // Exibe a mensagem de sucesso
  mensagemSucesso.style.display = "block";

  // Oculta a mensagem após 3 segundos
  setTimeout(() => {
    mensagemSucesso.style.display = "none";
  }, 3000);

  // Limpa os campos do formulário
  form.reset();
});
