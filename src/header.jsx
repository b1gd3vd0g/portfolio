import { Link } from 'react-router-dom';
import sprite from './assets/bdd_sprite.png';
import text from './assets/bdd_text.png';

function Header() {
  return (
    <header className='bg-[var(--mint-green)]'>
      <Link to='/'>
        <div className='flex items-center h-[100px]'>
          <img src={sprite} className='h-3/4' />
          <img src={text} className='h-1/2' />
        </div>
      </Link>
    </header>
  );
}

function NavBar() {
  return (
    <nav>
      <Link to='/projects'>Projects</Link>
    </nav>
  );
}

export default Header;
