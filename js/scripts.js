const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Verifica se o nome está vazio
  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome!");
    return;
  }

  //Verificar se o e-mail está preenchido, e se é válido.
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu e-mail corretamente!");
    return;
  }

  //Verifica se a senha está preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos!");
    return;
  }

  //Verifica se a situação foi selecionada
  if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação.");
    return;
  }

  //Verifica se a mensagem está preenchida
  if (messageTextArea.value === "") {
    alert("Por favor, escreva uma mensagem");
    return;
  }

  //Se todos os campos estiverem preenchidos corretamente, envie o formulário.
  form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  //verifica se o email é válido
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

// Função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    // Senha válida
    return true;
  } else {
    //Senha inválida
    return false;
  }
}
