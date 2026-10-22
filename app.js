/*
  Editá el texto de las escenas y los archivos de ilustración en este arreglo.
  Las ilustraciones se muestran sobre el afiche; el panel inferior permite leer y avanzar.
*/
const scenes = [
  {
    text: "Inicio de historia casa villa hortensia",
    image: "./assets/scene_01.png"
  },
  {
    text: "Texto historia 2",
    image: "./assets/scene_02.png"
  },
  {
    text: "Texto historia 3",
    image: "./assets/scene_03.png"
  },
  {
    text: "Texto historia 4 final",
    image: "./assets/scene_04.png"
  }

];

const intro = document.querySelector("#intro");
const status = document.querySelector("#status");
const card = document.querySelector("#story-card");
const storyText = document.querySelector("#story-text");
const storyCount = document.querySelector("#story-count");
const storyImage = document.querySelector("#story-image");
const storyLabel = document.querySelector("#story-label");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const autoButton = document.querySelector("#auto");
const target = document.querySelector("#poster-target");

let current = 0;
let autoTimer = null;
let autoEnabled = false;

function showScene(index) {
  current = (index + scenes.length) % scenes.length;
  const scene = scenes[current];
  storyText.textContent = scene.text;
  storyCount.textContent = `${String(current + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  storyImage.setAttribute("src", scene.image);
  storyLabel.setAttribute("value", scene.text);
  prevButton.disabled = current === 0;
  nextButton.textContent = current === scenes.length - 1 ? "Volver al inicio ↺" : "Continuar →";
}

function stopAuto() {
  if (autoTimer) window.clearInterval(autoTimer);
  autoTimer = null;
  autoEnabled = false;
  autoButton.textContent = "Activar avance automático";
}

function startAuto() {
  stopAuto();
  autoEnabled = true;
  autoButton.textContent = "Pausar avance automático";
  autoTimer = window.setInterval(() => showScene((current + 1) % scenes.length), 6500);
}

prevButton.addEventListener("click", () => {
  stopAuto();
  showScene(Math.max(0, current - 1));
});
nextButton.addEventListener("click", () => {
  stopAuto();
  showScene((current + 1) % scenes.length);
});

target.addEventListener("targetFound", () => {
  intro.classList.add("hidden");
  status.textContent = "Afiche reconocido";
  card.classList.remove("hidden");
});
target.addEventListener("targetLost", () => {
  status.textContent = "Buscando el afiche…";
  card.classList.add("hidden");
  stopAuto();
});

// Estado inicial; la experiencia se revela al reconocer la imagen.
showScene(0);
status.textContent = "Apuntá la cámara al afiche";
