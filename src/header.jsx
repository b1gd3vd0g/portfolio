import { Link } from 'react-router-dom';
import sprite from './assets/bdd_sprite.png';
import text from './assets/bdd_text.png';

function Header() {
  return (
    <header className='flex items-center h-[100px] bg-[#98ff98]'>
      <img src={sprite} className='h-3/4' />
      <img src={text} className='h-1/2' />
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
