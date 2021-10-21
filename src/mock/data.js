import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Justin Anderson | Full Stack Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `I like to build things with code, especially JavaScript, HTML, CSS, React. Let's build some things together.`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Justin Anderson',
  subtitle: `I run on JavaScript, coffee, and curiosity.`,
  cta: 'WANT TO KNOW MORE?',
};

// ABOUT DATA
export const aboutData = {
  img: 'justin-1.jpg',
  paragraphOne: `I'm a seasoned UX professional who discovered, mid-career, a passion for software engineering.`,
  paragraphTwo: `I spent years working alongside talented software engineers as I led UX and Content Strategy teams to design award-winning websites and digital experiences. The more I learned, the more interested I became in writing code. Finally, an opportunity emerged to enroll in the top-rated Hack Reactor bootcamp.`,
  paragraphThree: `Now I'm a qualified full stack engineer, looking for an opportunity to join an established engineering team. And unlike most newly minted bootcamp grads, I'm bringing a steady professionalism and a team-first work ethic, along with some considerable UX chops.`,
  resume: 'https://janderson-dev-files.s3.us-west-1.amazonaws.com/Justin_Anderson_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'grumpycatfinder-results.png',
    title: 'GrumpyCatFinder',
    info: 'Do you hate everyone? Maybe you should share your miserable, solitary existence with a cat who hates everyone, too.',
    info2:
      'GrumpyCatFinder uses the Petfinder public API to locate adoptable cats with... ahem... challenging personalities in your area.',
    url: 'https://github.com/WatchWordDev/grumpy-pet-finder',
    repo: 'https://github.com/WatchWordDev/grumpy-pet-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gramstamatic-signup.png',
    title: 'Gramstamatic',
    info: `Just because you like sharing photos with your friends, shouldn't mean you have to share all your personal data.`,
    info2: `This project began life as a Tailwind CSS tutorial, but it grew. The app hasn't been deployed to a live web server yet -- I am working on it.`,
    url: 'https://github.com/WatchWordDev/gramstamatic',
    repo: 'https://github.com/WatchWordDev/gramstamatic', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sdc-sample-listing.png',
    title: 'System Design: NotReallyAirBnB',
    info: 'A full stack system design project. With other team members, I created an microservices-based AirBnB clone with a React frontend and a Node/PSQL backend, deployed to load-balanced cluster of AWS EC2 instances.',
    info2: '',
    url: 'https://github.com/WatchWordDev/sdc-listing-service',
    repo: 'https://github.com/WatchWordDev/sdc-listing-service', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Maybe we can work together?`,
  btn: '',
  email: 'justin@watchworddigital.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jandersondev/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WatchWordDev',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/TheManderson/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
