import { useEffect, useRef, useState } from 'react';

function Animation({ spritesheet, ssPos, ssSize, fps, frameCount }) {
  // The initial frame:
  const [frame, setFrame] = useState(0);
  // Use a setTimeout to change the frame in 1 / fps seconds
  setTimeout(
    () => setFrame(frame + 1 >= frameCount ? 0 : frame + 1),
    1000 / fps
  );

  const canvas = useRef();

  useEffect(() => {
    if (spritesheet) {
      const context = canvas.current.getContext('2d');
      context.clearRect(0, 0, ssSize.x, ssSize.y);
      context.drawImage(
        spritesheet,
        ssPos.x + ssSize.x * frame,
        ssPos.y,
        ssSize.x,
        ssSize.y,
        0,
        0,
        ssSize.x,
        ssSize.y
      );
    }
  });

  return (
    <canvas
      className='h-[200px]'
      ref={canvas}
      height={ssSize.y}
      width={ssSize.x}
    />
  );
}

export default Animation;
