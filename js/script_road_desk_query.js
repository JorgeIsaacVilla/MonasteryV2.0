const btnRoadmap = document.querySelector("#btnRoadmap");

btnRoadmap.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (window.innerWidth < 850) {
    window.location.href = "#Roadmap";
  } else {
    window.location.href = "#Roadmap1";
  }
});

const btnRoadmap1 = document.querySelector("#btnRoadmap1");

btnRoadmap1.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (window.innerWidth < 850) {
    window.location.href = "#Roadmap";
  } else {
    window.location.href = "#Roadmap1";
  }
});

const btnRoadmap2 = document.querySelector("#btnRoadmap2");

btnRoadmap2.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (window.innerWidth < 850) {
    window.location.href = "#Roadmap";
  } else {
    window.location.href = "#Roadmap1";
  }
});