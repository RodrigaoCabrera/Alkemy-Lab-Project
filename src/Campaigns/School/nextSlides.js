export default function nextSlides(num, slideTime, setSlideIdx) {
    const slide1 = document.querySelector('.slide1');
    const slide2 = document.querySelector('.slide2');
    const slide3 = document.querySelector('.slide3');
    clearTimeout(slideTime);
    switch (num) {
      case 1:
        slide1.style.right = '100%';
        slide2.style.opacity = '1'
        slide2.style.right = '0';
        setSlideIdx(num);
        break
      case 2:
        slide2.style.right = '100%';
        slide3.style.opacity = '1'
        slide3.style.right = '0';
        setSlideIdx(num);
        break
      case 3:
        slide1.style.right = '0';
        slide2.style.right = '-100%'
        slide2.style.opacity = '0'
        slide3.style.right = '-100%';
        slide3.style.opacity = '0'
        setSlideIdx(num);
        break
      default:
        return;
    }
  }