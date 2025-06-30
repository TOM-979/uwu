let pantalla = 1;

function responder(opcion) {
  const contenedor = document.getElementById('content');

  if (pantalla === 1) {
    if (opcion === 'si') {
      mostrarCorazones("AHORA ERES MÍA 💖");
    } else if (opcion === 'no') {
      contenedor.innerHTML = `
        <h1>Ah... prefieres a tu amiguito, lo sabía 😢</h1>
      `;
    } else if (opcion === 'ohyara') {
      contenedor.innerHTML = `
        <h1>¿Es un sí o un no? 🤔</h1>
        <div class="options">
          <button onclick="responder('ohyara-si')">Sí</button>
          <button onclick="responder('ohyara-no')">No</button>
        </div>
      `;
      pantalla = 2;
    }
  } else if (pantalla === 2) {
    if (opcion === 'ohyara-si') {
      mostrarCorazones("AHORA ERES MÍA 💖");
    } else {
      contenedor.innerHTML = `
        <h1>Ah... prefieres a tu amiguito, lo sabía 😢</h1>
      `;
    }
  }
}

// 💖 Animación infinita de corazones
function mostrarCorazones(mensaje) {
  const contenedor = document.getElementById('content');
  contenedor.innerHTML = `<h1>${mensaje}</h1>`;

  // Repetir animación de corazones
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 2 + Math.random() * 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 200);
}
