// Obtém referências ao formulário, tabela e mensagem de sucesso para professores
const formProfessor = document.getElementById("form-novo-professor");
const listaProfessores = document.getElementById("lista-professores");
const mensagemSucessoProfessor = document.getElementById("mensagem-sucesso-professor");

// Adiciona um evento ao formulário
formProfessor.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  const nomeProfessor = document.getElementById("nome-professor").value;
  const disciplina = document.getElementById("disciplina").value;
  const turmas = document.getElementById("turmas").value;
  const temposSemana = parseInt(document.getElementById("tempos-semana").value, 10);
  const salarioTempo = parseFloat(document.getElementById("salario-tempo").value);

  // Calcula o salário mensal
  const salarioMensal = temposSemana * salarioTempo * 4; // Considera 4 semanas no mês

  // Cria uma nova linha para a tabela de professores
  const novaLinhaProfessor = document.createElement("tr");
  novaLinhaProfessor.innerHTML = `
    <td>${nomeProfessor}</td>
    <td>${disciplina}</td>
    <td>${turmas}</td>
    <td>${temposSemana}</td>
    <td>${salarioTempo.toFixed(2)}</td>
    <td>${salarioMensal.toFixed(2)}</td>
  `;

  // Adiciona a nova linha à tabela
  listaProfessores.appendChild(novaLinhaProfessor);

  // Exibe a mensagem de sucesso
  mensagemSucessoProfessor.style.display = "block";

  // Oculta a mensagem após 3 segundos
  setTimeout(() => {
    mensagemSucessoProfessor.style.display = "none";
  }, 3000);

  // Limpa os campos do formulário
  formProfessor.reset();
});
