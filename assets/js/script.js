// Expandable roadmap logic
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});


// Toggle for card-style roadmaps
const toggles = document.querySelectorAll('.card-toggle');

toggles.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});
