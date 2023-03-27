import verificaCPF from "./valida-cpf.js";
import maiorDeIdade from "./valida-idade.js";

// salvar todos os elementos com atributo de rerquired
const camposDoFormulario = document.querySelectorAll("[required]");

// para campo da lista vai ter um ouvinte do evento "blur" que chamará a função quando perder o foco no campo
camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
    verificaCPF(campo);   
  }
  if (campo.name == "aniversario" && campo.value != "") {
    maiorDeIdade(campo);
  }
}
