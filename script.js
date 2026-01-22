document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bible-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const frame = btn.closest(".photo-frame");
      const text = frame.querySelector(".verse-overlay p");
      text.textContent = btn.dataset.verse;

      document.querySelectorAll(".photo-frame.show-verse").forEach(open => {
        if (open !== frame) open.classList.remove("show-verse");
      });

      frame.classList.toggle("show-verse");
    });
  });

  document.querySelectorAll(".verse-overlay").forEach(overlay => {
    overlay.addEventListener("click", () => {
      overlay.closest(".photo-frame").classList.remove("show-verse");
    });
  });
});
