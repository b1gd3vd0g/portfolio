import Animation from './reusable/animation';
import Vector2 from './util/vector2';
import bddWave from './assets/bdd_waving.png';

function HomePage() {
  return (
    <>
      <div className='size-fit flex m-auto p-[10px]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl mb-[0.5em] font-[vt323]'>Hi, I'm Devin!</h1>
          <p className='max-w-[500px] tracking-wide text-xl text-center font-[vt323]'>
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
    </>
  );
}

export default HomePage;
