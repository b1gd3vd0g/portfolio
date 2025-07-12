import { Link } from 'react-router-dom';
import gbcTitle from '../assets/gbc_title.png';
import gbcScreenshot from '../assets/gbc-screenshots/village.png';

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <div className='bg-[var(--mint-green)] size-fit m-auto p-7 rounded-2xl min-w-7/10 max-w-9/10 w-[750px]'>
        <img src={gbcTitle} className='m-auto' />
        <img src={gbcScreenshot} className='smoothed pt-7 pb-7' />
        <p className='text-center'>
          A 2d platformer adventure game written in JavaScript that runs in the
          browser. Explore the world, chase down an evil wizard, and save your
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

// TODO: generalize this and figure out all you want to include.
// More important once I have 2+ projects.
export function ProjectSummary({ title, image, caption, path }) {
  return (
    <div className='bg-[var(--mint-green)] rounded-xl p-7'>
      <h2 className='ml-7 underline'>{title}</h2>
      <img src={image} className='py-7' />
      <p>{caption}</p>
      <Link to={path}>
        <h2 className='underline'>Learn more...</h2>
      </Link>
    </div>
  );
}
