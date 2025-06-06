  <script>
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const imgs = document.querySelectorAll(".carousel img");
    let index = 0;

    function updateCarousel() {
      const width = imgs[0].clientWidth;
      track.style.transform = `translateX(-${index * width}px)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % imgs.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + imgs.length) % imgs.length;
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
    window.addEventListener("load", updateCarousel);
  </script>