import { SlideObject, Slideshow } from '../../reusable/slideshow';
import title from '/src/assets/gbc_title.png';
import ssVillage from '/src/assets/gbc-screenshots/village.png';
import ssLearn from '/src/assets/gbc-screenshots/learn.png';
import ssDefend from '/src/assets/gbc-screenshots/defend.png';
import CollapsibleSection from '../../reusable/collapsible';

const gbcSlideshow = [
  new SlideObject(ssVillage, 'Spawn at home in your peaceful, boring village.'),
  new SlideObject(
    ssLearn,
    'Learn to hunt with your trusty slingshot and sword.'
  ),
  new SlideObject(ssDefend, 'Defend your home and protect your people.')
];

function GoodBadChadProjectOverview() {
  return (
    <>
      <img src={title} className='m-auto' />
      <p className='text-center'>
        A web game that runs in the browser, with persistent saves and a fully
        automated cloud deployment.
      </p>
      <LinkBar />
      <Slideshow slides={gbcSlideshow} />
      <TableOfContents />
      <CollapsibleSection id='overview' title='Overview' startCollapsed={true}>
        <p>
          "The Good, the Bad, and Chad!" is a two-dimensional platformer
          adventure game. This project is built upon three distinct layers that
          work together seamlessly: the interactive frontend game, a backend API
          for persistent accounts and save files, and a Terraform-powered
          deployment system that allows anyone to launch the game infrastructure
          on AWS with ease.
        </p>
      </CollapsibleSection>
      <FrontendSummary />
      <BackendSummary />
      <DevOpsSummary />
    </>
  );
}

function LinkBar() {
  return (
    <div className='flex justify-evenly'>
      <a
        href='https://www.goodbadchad.bigdevdog.com'
        target='_blank'
        rel='noreferrer'
      >
        <h3 className='no-underline bg-[var(--mint-accent)] px-4 py-2'>
          Play now
        </h3>
      </a>
    </div>
  );
}

function TableOfContents() {
  return (
    <CollapsibleSection title='Table of Contents'>
      <ul className='text-2xl underline'>
        <li>
          <a href='#overview'>Overview</a>
        </li>
        <li>
          <a href='#frontend'>Frontend</a>
        </li>
        <li>
          <a href='#backend'>Backend</a>
        </li>
        <li>
          <a href='#devops'>Dev Ops</a>
        </li>
      </ul>
    </CollapsibleSection>
  );
}

function FrontendSummary() {
  return (
    <CollapsibleSection title='Frontend' id='frontend' startCollapsed={true}>
      <p>
        The frontend game was developed in a team of four in Winter 2024 as part
        of a game development class. Utilizing the principles of agile
        development, we created a large world full of diverse characters,
        enemies, and settings in only ten short weeks. 100% of the art (pixel
        art and music alike) in this game is custom.
      </p>
      <h3>Links:</h3>
      <ul>
        <li>
          <a
            href='https://www.goodbadchad.bigdevdog.com'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Play now
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/b1gd3vd0g/good-bad-chad-devin'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Check out the code
          </a>
        </li>
      </ul>
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
    </CollapsibleSection>
  );
}

function BackendSummary() {
  return (
    <CollapsibleSection title='Backend' id='backend' startCollapsed={true}>
      <p>
        The backend API was created almost a year following the completion of
        the frontend game. Unlike the frontend, I created the backend myself. I
        created an express application to serve a RESTful API empowering users
        to securely sign up, authenticate safely using JSON web tokens, as well
        as create, read, and delete save files.
      </p>
      <h3>Links:</h3>
      <ul>
        <li>
          <a
            href='https://www.api.goodbadchad.bigdevdog.com'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            See API documentation
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/b1gd3vd0g/good-bad-chad-saving-api'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Check out the code
          </a>
        </li>
      </ul>
      <h3>Tech stack:</h3>
      <ul>
        <li>Node.js + Express</li>
        <li>PostgreSQL</li>
        <li>CORS</li>
      </ul>
      <h3>Highlights:</h3>
      <ul>
        <li>
          Implemented robust security measures, including password hashing, data
          encryption, and strict CORS policies to protect user data.
        </li>
        <li>
          Designed a secure authentication and authorization system using JSON
          Web Tokens (JWT).
        </li>
        <li>
          Developed comprehensive OpenAPI documentation to clearly define and
          standardize all API endpoints.
        </li>
      </ul>
      <h3>Challenges and lessons:</h3>
      <ul>
        <li>
          Early deployment efforts involved configuring a custom VPS on
          Lightsail, which quickly revealed scalability and maintainability
          limitations. This experience highlighted the importance of using
          infrastructure that supports automation and growth.
        </li>
        <li>
          Deploying the API and database taught me the importance of building
          with security in mind from the start—especially around HTTPS
          encryption, password hashing, and careful handling of environment
          variables.
        </li>
        <li>
          I gained a much deeper understanding of CORS policies, which were
          critical to securely exposing my API to the frontend while preventing
          unwanted cross-origin access.
        </li>
      </ul>
      <h3>Takeaway:</h3>
      <p>
        This portion of the project taught me invaluable skills that I will take
        forward into many projects in the future. It successfully converts "The
        Good, the Bad, and Chad!" into my first functional full-stack web app,
        which is professionally exciting.
      </p>
    </CollapsibleSection>
  );
}

function DevOpsSummary() {
  return (
    <CollapsibleSection title='Dev Ops' id='devops' startCollapsed='true'>
      <p>
        Desiring to develop my knowledge of DevOps processes, as well as to
        deploy my application in a more cost effective manner, I created a
        Terraform project to create Infrastructure as Code. Using this project
        (and a handful of terminal commands), anybody can deploy "The Good, the
        Bad, and Chad" on AWS infrastructure with ease. I also set up a CI/CD
        pipeline on both projects so that changes to my repository would
        automatically be reflected online.
      </p>
      <h3>Link:</h3>
      <ul>
        <li>
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.github.com/b1gd3vd0g/good-bad-chad-terraform'
          >
            Check out the code
          </a>
        </li>
      </ul>
      <h3>Tech stack:</h3>
      <ul>
        <li>AWS (API Gateway, Lambda, RDS, S3, CloudFront, Route53)</li>
        <li>Terraform</li>
        <li>GitHub Actions</li>
      </ul>
      <h3>Highlights:</h3>
      <ul>
        <li>
          Serve the frontend game by holding the files in an S3 bucket and using
          CloudFront to serve the content globally.
        </li>
        <li>
          Created a CI/CD pipeline for both projects which will automatically
          deploy the updated application following changes to the master branch.
        </li>
        <li>
          Reduced deployment costs by over 50% compared to previous solutions.
        </li>
      </ul>
      <h3>Challenges and lessons:</h3>
      <ul>
        <li>
          This project introduced me to a lot of critical cloud computing and
          security concepts, such as creating isolated VPCs and IAM roles using
          the principle of least privilege.
        </li>
        <li>
          In learning terraform, I encountered several race conditions that I
          had to work around, forcing me to investigate and understand what was
          going on behind the scenes.
        </li>
      </ul>
      <h3>Takeaway:</h3>
      <p>
        Being my first introduction to both Terraform and the CI/CD pipeline,
        this project was very exciting for me. The automatic deployment simply
        by pushing changes to my remote repository feels revolutionary, and I
        can't see myself working on projects in the future without configuring
        similar processses early on.
      </p>
    </CollapsibleSection>
  );
}

export default GoodBadChadProjectOverview;
