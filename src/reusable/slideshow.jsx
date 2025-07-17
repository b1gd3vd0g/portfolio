import { useState } from 'react';
import arrow from '/src/assets/arrow.png';

/** Holds the data for a single slide of a slideshow. */
export function SlideData(image, caption = '') {
  this.image = image;
  this.caption = caption;
}

/**
 * Displays multiple slides of data to the user. The arrows on the side can be
 * clicked to change from slide to slide.
 * @param {object} props
 * @param {Array<SlideData>} props.slides The slides to include in the slideshow.
 */
export default function Slideshow({ slides }) {
  const [curr, setCurr] = useState(0);
  const increment = () => setCurr((curr + 1) % slides.length);
  const decrement = () => setCurr(curr - 1 >= 0 ? curr - 1 : slides.length - 1);
  return (
    <div className='flex-col'>
      <div className='flex items-center space-evenly m-auto max-w-1/1 w-[1000px]'>
        <img
          src={arrow}
          onClick={decrement}
          className='size-15 max-w-[5vmin] max-h-[10vmin] cursor-pointer'
        />
        <Slide data={slides[curr]} />
        <img
          src={arrow}
          onClick={increment}
          className='rotate-180 size-15 max-w-[5vmin] max-h-[10vmin] cursor-pointer'
        />
      </div>
      <SlideshowDotBar slideCount={slides.length} curr={curr} />
    </div>
  );
}

/**
 * The portion of the slideshow actually presenting the current set of data,
 * @param {object} props
 * @param {SlideData} props.data The data to be displayed on this slide.
 */
function Slide({ data }) {
  const { image, caption = '' } = data;
  return (
    <div className='p-7 rounded-2xl bg-[var(--mint-green)] m-2'>
      <img src={image} />
      <p className='text-center'>{caption}</p>
    </div>
  );
}

/**
 * Displays the dots below the slideshow indicating the index of the current
 * slide.
 * @param {object} props
 * @param {number} props.slideCount The number of slides in the slideshow.
 * @param {number} props.curr The current slide being desplayed.
 */
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
            className='bg-[var(--mint-accent)] p-2 rounded-md'
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
