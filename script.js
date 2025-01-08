const modalBox = document.querySelector(".modalBox");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modalBox.classList.replace("hidden", "flex");
  document.body.classList.add("overflow-hidden");
}
function closeModal() {
  modalBox.classList.replace("flex", "hidden");
  document.body.classList.remove("overflow-hidden");
}
