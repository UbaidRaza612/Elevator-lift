let btns = document.querySelectorAll(".btn");
let elevator = document.querySelector("#elevator");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let floor = e.target.textContent;
    elevator.style.bottom = `${floor * 200}px`;
  });
});
