import verificaCPF from "./valida-cpf.js";
import maiorDeIdade from "./valida-idade.js";

// salvar todos os elementos com atributo de rerquired
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
  // para campo da lista vai ter um ouvinte do evento "blur" que chamará a função quando perder o foco no campo
  campo.addEventListener("blur", () => verificaCampo(campo));

  // eliminar a mensagem padrão do invalid
  campo.addEventListener("invalid", evento => evento.preventDefault());
});

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
]

const mensagens = {
  nome: {
      valueMissing: "O campo de nome não pode estar vazio.",
      patternMismatch: "Por favor, preencha um nome válido.",
      tooShort: "Por favor, preencha um nome válido."
  },
  email: {
      valueMissing: "O campo de e-mail não pode estar vazio.",
      typeMismatch: "Por favor, preencha um email válido.",
      tooShort: "Por favor, preencha um e-mail válido."
  },
  rg: {
      valueMissing: "O campo de RG não pode estar vazio.",
      patternMismatch: "Por favor, preencha um RG válido.",
      tooShort: "O campo de RG não tem caractéres suficientes."
  },
  cpf: {
      valueMissing: 'O campo de CPF não pode estar vazio.',
      patternMismatch: "Por favor, preencha um CPF válido.",
      customError: "O CPF digitado não existe.",
      tooShort: "O campo de CPF não tem caractéres suficientes."
  },
  aniversario: {
      valueMissing: 'O campo de data de nascimento não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  termos: {
      valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}

function verificaCampo(campo) {
  let mensagem = "";

  campo.setCustomValidity('');

  if (campo.name == "cpf" && campo.value.length >= 11) {
    verificaCPF(campo);   
  }
  if (campo.name == "aniversario" && campo.value != "") {
    maiorDeIdade(campo);
  }

  tiposDeErro.forEach(erro => {
    // verifica cada campo da lista e ver se está "true", se estiver, mostra o erro 
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
    }
  });

  // variável para selecionar só o spam com a classe mensagem-erro que está embaixo do input desejado
  const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');

  // verificar se o campo está válido ou nãoo
  const validadorDeInput = campo.checkValidity();

  // se não estiver válido, imprime a mensagem. Se não, não imprime nada.
  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}
