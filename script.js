document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      contents.forEach(c => c.classList.remove("active"));
      contents[index].classList.add("active");
    });
  });
});