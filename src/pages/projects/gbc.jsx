import { SlideObject, Slideshow } from '../../reusable/slideshow';
import title from '/src/assets/gbc_title.png';
import ssVillage from '/src/assets/gbc-screenshots/village.png';
import ssLearn from '/src/assets/gbc-screenshots/learn.png';
import ssDefend from '/src/assets/gbc-screenshots/defend.png';

function GoodBadChadProjectOverview() {
  return (
    <>
      <img src={title} className='m-auto' />
      <p className='text-center'>
        A web game that runs in the browser, with persistent saves and a fully
        automated cloud deployment.
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
      <h2>Overview</h2>
      <p>
        "The Good, the Bad, and Chad!" is a two-dimensional platformer adventure
        game. This project is built upon three distinct layers that work
        together seamlessly: the interactive frontend game, a backend API for
        persistent accounts and save files, and a Terraform-powered deployment
        system that allows anyone to launch the game infrastructure on AWS with
        ease.
      </p>
      <FrontendSummary />
    </>
  );
}

function FrontendSummary() {
  return (
    <>
      <h2 className='underline decoration-[var(--lavender)]'>Frontend</h2>
      <p>
        The frontend game was developed in a team of four in Winter 2024 as part
        of a game development class. Utilizing the principles of agile
        development, we created a large world full of diverse characters,
        enemies, and settings in only ten short weeks. 100% of the art (pixel
        art and music alike) in this game is custom.
      </p>
      <h3>Tech stack:</h3>
      <ul>
        <li>Vanilla JavaScript</li>
        <li>HTML5 Canvas API</li>
        <li>A custom game engine</li>
      </ul>
      <h3>Personal contributions:</h3>
      <ul>
        <li>
          Developed a flexible conversation system that supports dynamic story
          progression and new game mechanics, including merchant interactions.
        </li>
        <li>
          Boosted performance by optimizing zone-loading logic and minimizing
          unnecessary collision checks.
        </li>
        <li>
          Integrated the backend API to enable player authentication, as well as
          the creation, deletion, and loading of persistent save files.
        </li>
        <li>
          Created beloved sprites such as Mama and Papa Chad, the sun, the Evil
          Wizard, and the slimes!
        </li>
      </ul>
      <h3>Challenges and lessons:</h3>
      <ul>
        <li>
          As the project scaled, some systems became overloaded, making them
          increasingly difficult to maintain and extend. In hindsight, the team
          would have benefitted from adopting a more modular design - breaking
          functionality into smaller, single-purpose classes and further
          decoupling core engine logic from game-specific behavior.
        </li>
        <li>
          The codebase would be significantly more readable and maintainable if
          it had leveraged ES6 modules to organize functionality, rather than
          loading all scripts in the HTML head and relying heavily on global
          variables.
        </li>
      </ul>
      <h3>Takeaway:</h3>
      <p>
        Building this game taught me invaluable lessons about team collaboration
        and solidified my passion for designing intuitive, versatile systems. It
        also deepened my appreciation for performance optimization as a core
        part of thoughtful software design.
      </p>
    </>
  );
}

export default GoodBadChadProjectOverview;
