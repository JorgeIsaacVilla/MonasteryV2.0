const btnRoadmap = document.querySelector("#btnRoadmap");

btnRoadmap.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (window.innerWidth < 850) {
    window.location.href = "#Roadmap";
  } else {
    window.location.href = "#Roadmap1";
  }
});