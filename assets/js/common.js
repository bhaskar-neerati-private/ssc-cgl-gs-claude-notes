const backToTopBtn = document.createElement("button");
backToTopBtn.id = "back-to-top-btn";
backToTopBtn.textContent = "↑ Top";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 300);
});
