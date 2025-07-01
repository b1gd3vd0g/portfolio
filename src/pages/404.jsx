import { Link } from 'react-router-dom';
import grave from '../assets/404_grave.png';

function FourOhFour() {
  return (
    <div>
      <img src={grave} className='m-auto w-[500px] max-w-4/5' />
      <h1>Looks like you've fallen off the map!</h1>
      <Link to='/'>
        <h2 className='underline text-center text-2xl'>Respawn at home</h2>
      </Link>
    </div>
  );
}

export default FourOhFour;
