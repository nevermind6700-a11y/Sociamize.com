// Accordion
document.querySelectorAll('.accordion-title').forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;
    item.classList.toggle('active');
  });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = +counter.innerText.replace(suffix, '');
    const increment = target / 200;
    if(count < target) {
      counter.innerText = Math.ceil(count + increment) + suffix;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target + suffix;
    }
  };
  updateCount();
});

// Swiper Carousel
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    640: { slidesPerView:1 },
    768: { slidesPerView:2 },
    1024:{ slidesPerView:3 }
  }
});
