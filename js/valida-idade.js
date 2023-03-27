export default function maiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validaIdade(dataNascimento);

  console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
  const dataAtual = new Date();

  // pega os dados da data de nascimento e colocou 18 anos a mais, para ver quando a pessoa fez 18 anos.
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataAtual >= dataMais18;
}