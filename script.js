(function () {
  const colors = ['green', 'blue', 'red'];
  const h5s = document.querySelectorAll('h5');
  const applyRandomColorsToAll = () => {
    h5s.forEach(h5 => {
      const index = Math.floor(Math.random() * colors.length);
      h5.style.color = colors[index];
    });
  };
  // Colores iniciales al cargar
  applyRandomColorsToAll();
  // Al hacer clic en cualquier h5, cambian los colores (green, blue, red) de todos los h5
  h5s.forEach(h5 => {
    h5.addEventListener('click', applyRandomColorsToAll);
  });
})();