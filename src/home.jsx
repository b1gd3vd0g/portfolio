import Animation from './reusable/animation';
import Vector2 from './util/vector2';

function HomePage() {
  return (
    <>
      <div className='size-fit flex m-auto p-[10px]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-3xl underline mb-[1em]'>
            Hi, I'm Devin!
          </h1>
          <p className='max-w-[500px] tracking-wide text-xl text-center'>
            I turn creative ideas into games, apps, and interactive experiences
            you can click, play, or deploy.
          </p>
        </div>
        <Animation
          spritesheet='/src/assets/bdd_waving.png'
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
