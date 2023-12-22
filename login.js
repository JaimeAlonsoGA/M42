  ('login-form').onclick = () => {
    const elA = document.getElementById('login-form');
  const elB = document.getElementById('register-form');

  elA.style.opacity = 0;
  
    setTimeout(() => {
    elA.style.display = 'none';
  // Muestra el elemento B
  elB.style.display = 'block';
  // Aplica la transición de opacidad al elemento B
  elB.style.opacity = 1;
  }, 200); // 500 milisegundos, ajusta según la duración de tu transición CSS
  }
  
  document.getElementById('register-form').onclick = () => {
    const elA = document.getElementById('login-form');
  const elB = document.getElementById('register-form');

  elB.style.opacity = 0;
  
    setTimeout(() => {
    elB.style.display = 'none';
  // Muestra el elemento B
  elA.style.display = 'block';
  // Aplica la transición de opacidad al elemento B
  elA.style.opacity = 1;
  }, 200); // 500 milisegundos, ajusta según la duración de tu transición CSS
  }