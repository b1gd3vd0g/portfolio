import { SlideObject, Slideshow } from '../../reusable/slideshow';
import title from '/src/assets/gbc_title.png';
import ssVillage from '/src/assets/gbc-screenshots/village.png';
import ssLearn from '/src/assets/gbc-screenshots/learn.png';
import ssDefend from '/src/assets/gbc-screenshots/defend.png';

function GoodBadChadProjectOverview() {
  return (
    <div>
      <img src={title} className='m-auto' />
      <p className='text-center'>
        A two-dimensional platformer adventure game, with persistent saves and a
        fully automated cloud deployment.
      </p>
      <Slideshow
        slides={[
          new SlideObject(
            ssVillage,
            'Spawn at home in your peaceful, boring village.'
          ),
          new SlideObject(
            ssLearn,
            'Learn to hunt with your trusty slingshot and sword.'
          ),
          new SlideObject(ssDefend, 'Defend your home and protect your people.')
        ]}
      />
    </div>
  );
}

export default GoodBadChadProjectOverview;
