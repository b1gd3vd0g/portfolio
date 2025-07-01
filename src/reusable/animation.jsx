import { useEffect, useRef, useState } from 'react';
import Vector2 from '../util/vector2';

/**
 * Create a single animation from a spritesheet.
 * @param {object} props The props object.
 * @param {string} props.spritesheet The path to the spritesheet.
 * @param {Vector2} props.ssPos The position of start of the first frame on the spritesheet.
 * @param {Vector2} props.ssSize The size (in pixels) of a single sprite on the spritesheet.
 * @param {number} props.fps The speed (frames per second) of the animation.
 * @param {number} props.frameCount The number of frames in the animation.
 * @param {string} props.className The tailwindcss class names for the animation.
 * @returns A canvas element with the desired animation drawn on it.
 */
function Animation({ spritesheet, ssPos, ssSize, fps, frameCount, className }) {
  const [ready, setReady] = useState(false);
  const [frame, setFrame] = useState(0);
  const canvas = useRef(null);
  const imageRef = useRef(new Image());

  // Load the image (only once!):
  useEffect(() => {
    const img = imageRef.current;

    const handleLoad = () => {
      console.log(`spritesheet ${spritesheet} loaded.`);
      setReady(true);
    };

    const handleError = () => {
      console.error(`spritesheet ${spritesheet} failed to load.`);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    img.src = spritesheet;

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [spritesheet]);

  // Update the frame whenever needed.
  useEffect(() => {
    if (!ready) return;

    const interval = setInterval(
      () => setFrame((prev) => (prev + 1) % frameCount),
      1000 / fps
    );

    return () => clearInterval(interval);
  }, [ready, fps, frameCount]);

  // Draw the current frame on the canvas.
  useEffect(() => {
    if (!ready) return;

    const context = canvas.current.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, ssSize.x, ssSize.y);
    context.drawImage(
      imageRef.current,
      ssPos.x + frame * ssSize.x,
      ssPos.y,
      ssSize.x,
      ssSize.y,
      0,
      0,
      ssSize.x,
      ssSize.y
    );
  }, [frame, ready, ssPos, ssSize]);

  return (
    <canvas
      ref={canvas}
      width={ssSize.x}
      height={ssSize.y}
      className={className}
    />
  );
}

export default Animation;
