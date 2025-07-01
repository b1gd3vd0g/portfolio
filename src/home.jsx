import Animation from './reusable/animation';
import Vector2 from './util/vector2';
import bddWave from './assets/bdd_waving.png';

function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
    </>
  );
}

function Hero() {
  return (
    <div className='size-fit flex m-auto p-[10px]'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl mb-[0.5em] text-center'>Hi, I'm Devin!</h1>
        <p className='max-w-[500px] tracking-wide text-center'>
          I bring great ideas to life on screen through games, apps, and
          creative coding solutions that run in the cloud.
        </p>
      </div>
      <Animation
        spritesheet={bddWave}
        ssPos={new Vector2(0, 0)}
        ssSize={new Vector2(416, 744)}
        fps={8}
        frameCount={4}
      />
    </div>
  );
}

function WhatIDo() {
  return (
    <div className='ml-[10vw]'>
      <h1 className='text-5xl mb-[0.5em]'>What I make:</h1>
      <ul className='list-disc text-2xl'>
        <li className='flex items-center'>
          <img src='/src/assets/bullets/controller.png' />
          <span className='p-[0.5em]'>Interactive web games to entertain</span>
        </li>
        <li className='flex items-center'>
          <img src='/src/assets/bullets/laptop.png' />
          <span className='p-[0.5em]'>
            Full-stack web apps to solve real problems
          </span>
        </li>
        <li className='flex items-center'>
          <img src='/src/assets/bullets/robot.png' />
          <span className='p-[0.5em]'>
            Tools to automate away the boring stuff
          </span>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
