import { useState } from 'react';
import arrow from '/src/assets/arrow.png';

/**
 * @param {Array<SlideObject>} props.slides The slides to include in the slideshow.
 */
function Slideshow({ slides }) {
  const [curr, setCurr] = useState(0);
  const increment = () => setCurr((curr + 1) % slides.length);
  const decrement = () => setCurr(curr - 1 >= 0 ? curr - 1 : slides.length - 1);
  return (
    <div className='flex-col'>
      <div className='flex items-center space-evenly m-auto max-w-1/1 w-[1000px]'>
        <img src={arrow} onClick={decrement} className='grow-0 size-15' />
        <Slide data={slides[curr]} />
        <img src={arrow} onClick={increment} className='rotate-180 size-15' />
      </div>
      <SlideshowDotBar slideCount={slides.length} curr={curr} />
    </div>
  );
}

function Slide({ data }) {
  const { image, caption = '' } = data;
  return (
    <div className='p-7 rounded-2xl bg-[var(--mint-green)]'>
      <img src={image} />
      <p className='text-center'>{caption}</p>
    </div>
  );
}

function SlideshowDotBar({ slideCount, curr }) {
  const dots = [];
  for (let i = 0; i < slideCount; i++) {
    dots.push(
      <div
        className='bg-[var(--mint-green)] p-2 rounded-md m-2 h-min '
        key={`gbc-slideshow-dot-${i}`}
      >
        {curr !== i ? (
          <></>
        ) : (
          <div
            className='bg-[var(--mint-green)] brightness-[0.5] p-2 rounded-md'
            key={`gbc-slideshow-dot-${i}-active`}
          ></div>
        )}
      </div>
    );
  }
  return (
    <div className='m-auto flex space-evenly items-center size-fit'>{dots}</div>
  );
}

function SlideObject(image, caption = '') {
  this.image = image;
  this.caption = caption;
}

export { Slideshow, SlideObject };
