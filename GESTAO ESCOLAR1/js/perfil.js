// Referências para Adicionar Gestores
const formAdicionarUsuario = document.getElementById("adicionar-usuario-form");
const sucessoAdicionar = document.getElementById("sucesso-adicionar");

// Evento de envio do formulário de adicionar usuário
formAdicionarUsuario.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão

  // Mostra mensagem de sucesso
  sucessoAdicionar.style.display = "block";

  // Oculta após 3 segundos
  setTimeout(() => {
    sucessoAdicionar.style.display = "none";
  }, 3000);

  // Limpa os campos
  formAdicionarUsuario.reset();
});

// Referência para Alterar Palavra-Passe
const alterarSenhaBtn = document.getElementById("alterar-senha-btn");
alterarSenhaBtn.addEventListener("click", function () {
  alert("Funcionalidade de alterar palavra-passe em desenvolvimento!");
});
