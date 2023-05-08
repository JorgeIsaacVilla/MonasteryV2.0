const btnRoadmap = document.querySelector("#btnRoadmap");

btnRoadmap.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (window.innerWidth < 850) {
    // Pantalla menor a 850px de ancho, redirigir a #Roadmap
    window.location.href = "#Roadmap";
  } else {
    // Pantalla mayor o igual a 850px de ancho, redirigir a #Roadmap1
    window.location.href = "#Roadmap1";
  }
});