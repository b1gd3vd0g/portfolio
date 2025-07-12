import { Link } from 'react-router-dom';
import sprite from './assets/bdd_sprite.png';
import text from './assets/bdd_text.png';
import { useState } from 'react';

import arrow from './assets/arrow.png';

function Header() {
  return (
    <>
      <header className='bg-[var(--mint-green)]'>
        <Link to='/'>
          <div className='flex items-center h-[100px]'>
            <img src={sprite} className='h-3/4' />
            <img src={text} className='h-1/2' />
          </div>
        </Link>
      </header>
      <NavBar />
    </>
  );
}

function NavBar() {
  const [extended, setExtended] = useState(false);
  const rotation = extended ? 'rotate-90' : 'rotate-270';

  const flipExtension = () => setExtended(!extended);

  return (
    <nav className='bg-[var(--mint-accent)]'>
      <NavLinks visible={extended} close={() => setExtended(false)} />
      <div
        className='flex justify-center cursor-pointer'
        onClick={flipExtension}
      >
        <img src={arrow} className={`${rotation} p-1`} />
      </div>
    </nav>
  );
}

function NavLinks({ visible, close }) {
  if (!visible) return <></>;
  return (
    <div className='flex-col items-center'>
      <NavLink path='/' label='Home page' close={close} />
      <NavLink path='/projects' label='Check out my projects' close={close} />
      <NavLink path='/contact' label='Shoot me a message' close={close} />
    </div>
  );
}

function NavLink({ path, label, close }) {
  return (
    <>
      <Link to={path} className='flex'>
        <p className='text-center w-1/1' onClick={close}>
          {label}
        </p>
      </Link>
      <hr className='bg-[var(--mint-green)] h-px border-none mx-7' />
    </>
  );
}

export default Header;
