const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem");
let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () {
  // solicita ao usuário para ligar a câmera
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

  botaoIniciarCamera.style.display = "none";
  campoCamera.style.display = "block";

  video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener("click", function () {
  // cria um canvas no contexto 2d, desenha uma imagem na posição que o vídeo estava quando clicado o botão, coloca o posicionamento 0,0 e o tamanho e a largura do canvas
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // transforma a imagem gerada em canvas em uma url
  imagemURL = canvas.toDataURL("image/jpeg");

  // tira o campo de câmera
  campoCamera.style.display = "none";
  // aparece a mensagem
  mensagem.style.display = "block";
});