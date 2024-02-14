document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider_main__photo');
    const ellipses = document.querySelectorAll('.slider__ellipse');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    prevBtn.addEventListener('click', () => {
      clearInterval(slideInterval); // Остановка автоматического переключения при ручном изменении слайда
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    nextBtn.addEventListener('click', () => {
      clearInterval(slideInterval); // Остановка автоматического переключения при ручном изменении слайда
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    ellipses.forEach((ellipse, index) => {
        ellipse.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
  
    let slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000); // Интервал в миллисекундах (здесь 5000 мс, то есть 5 секунд)
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
  
      ellipses.forEach((ellipse, i) => {
        if (i === index) {
          ellipse.classList.add('slider__ellipse--active');
        } else {
          ellipse.classList.remove('slider__ellipse--active');
        }
      });
    }
  });


//   ourproducts-slider

let currentOurSlide = 0

function changeSlide(index) {
    const items = document.querySelectorAll('.ourproducts-photos__item')

    items.forEach((item, i) => {
        item.classList.remove('--active');
        item.style.gridRow = 'span 1'
        if (i === index) {
            item.classList.add('--active')
            item.style.gridRow = 'span 2'
        }
    })

    currentOurSlide = index
}