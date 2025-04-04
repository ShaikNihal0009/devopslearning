// Expandable roadmap logic
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});
