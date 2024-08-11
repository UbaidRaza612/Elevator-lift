let btns = document.querySelectorAll(".btn");
let elevator = document.querySelector("#elevator");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let floor = `${e.target.textContent * 200}px` ;
    elevator.style.bottom = floor;
    localStorage.setItem("floor" , floor)
  });
});

elevator.style.bottom = localStorage.getItem("floor");