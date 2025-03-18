document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-active");
          }
      });
  }, {
      threshold: 0.2 // 画像の20%が表示されたらフェードイン
  });

  fadeInElements.forEach((element) => {
      observer.observe(element);
  });
});
