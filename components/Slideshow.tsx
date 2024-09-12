import React from 'react';
import Image from 'next/image';

function Slideshow() {
  let slideIndex = 1;
  const showSlides = React.useCallback((n:number) => {
    let i = null;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add('hidden');
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].classList.add('block');
    slides[slideIndex - 1].classList.remove('hidden');
    dots[slideIndex - 1].className += ' active';
  }, [slideIndex]);

  React.useEffect(() => {
    showSlides(slideIndex);
  }, [showSlides, slideIndex]);

  const plusSlides = (n:number) => {
    showSlides(slideIndex += n);
  };

  const currentSlide = (n:number) => {
    showSlides(slideIndex = n);
  };

  return (
    <div>

      <div className="slideshow-container">

        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <Image width={500} height={300} className="w-full" src="/1.png" alt="" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <Image width={500} height={300} className="w-full" src="/2.png" alt="" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <Image width={500} height={300} className="w-full" src="/3.png" alt="" />
          <div className="text">Caption Three</div>
        </div>

        <button type="button" className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
        <button type="button" className="next" onClick={() => plusSlides(1)}>&#10095;</button>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span role="presentation" className="dot" onClick={() => currentSlide(1)} />
        <span role="presentation" className="dot" onClick={() => currentSlide(2)} />
        <span role="presentation" className="dot" onClick={() => currentSlide(3)} />
      </div>

    </div>
  );
}

export default Slideshow;
