const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const modal = document.querySelector("#modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

closeBtn.addEventsListener("click", () => {
  modal.style.displey = "none";
});

modal.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
