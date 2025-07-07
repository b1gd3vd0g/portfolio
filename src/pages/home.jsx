import Animation from '/src/reusable/animation';
import Vector2 from '/src/util/vector2';

import bddWave from '/src/assets/bdd_waving.png';
import gbcScreenshot from '/src/assets/gbc-screenshots/village.png';
import controller from '/src/assets/bullets/controller.png';
import robot from '/src/assets/bullets/robot.png';
import laptop from '/src/assets/bullets/laptop.png';
import gbcTitle from '/src/assets/gbc_title.png';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <CheckThisOut />
    </>
  );
}

function Hero() {
  return (
    <div className='size-fit flex m-auto p-[10px] items-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1>Hi, I'm Devin!</h1>
        <p className='max-w-[500px] text-center'>
          I bring great ideas to life on screen through games, apps, and
          creative coding solutions that run in the cloud.
        </p>
      </div>
      <Animation
        spritesheet={bddWave}
        ssPos={new Vector2(0, 0)}
        ssSize={new Vector2(52, 93)}
        fps={8}
        frameCount={4}
        className='h-[200px]'
      />
    </div>
  );
}

function WhatIDo() {
  return (
    <div className='ml-[10vw]'>
      <h1 className='text-left'>What I make:</h1>
      <ul className='text-2xl'>
        <li className='flex items-center'>
          <img src={controller} />
          <span className='p-[0.5em]'>Interactive web games to entertain</span>
        </li>
        <li className='flex items-center'>
          <img src={laptop} />
          <span className='p-[0.5em]'>
            Full-stack web apps to solve real problems
          </span>
        </li>
        <li className='flex items-center'>
          <img src={robot} />
          <span className='p-[0.5em]'>
            Tools to automate away the boring stuff
          </span>
        </li>
      </ul>
    </div>
  );
}

function CheckThisOut() {
  return (
    <>
      <h1>Check this out!</h1>
      <div className='bg-[var(--mint-green)] size-fit m-auto p-7 rounded-2xl min-w-7/10 max-w-9/10 w-[750px]'>
        <img src={gbcTitle} className='m-auto' />
        <img src={gbcScreenshot} className='smoothed pt-7 pb-7' />
        <p className='text-center'>
          A 2d platformer adventure game written in JavaScript that runs in the
          browser! Explore the world, chase down an evil wizard, and save your
          mama!
        </p>
        <div className='flex w-1/1 justify-evenly'>
          <a
            href='https://goodbadchad.bigdevdog.com'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='underline'>Play now!</h2>
          </a>
          <Link to='/projects/goodbadchad'>
            <h2 className='underline'>Learn more...</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
