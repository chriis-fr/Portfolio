import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wastetime,
    drumbox,
    unreal,
    chrischat,
    dnandwa,
    defdef,
    ml,
    chrisgpt,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Back-End Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: web,
    },
    {
      title: "Front-End Developer",
      icon: creator,
    },
    {
      title: "App Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "self",
      icon: reactjs,
      iconBg: "#383E56",
      date: "December 2022 - current date",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Always learing and sharpening my skills on a daily basis"
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "self",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "December 2022 - current date",
      points: [
        "Developing web applications using Node.js and other server-based related technologies.",
        "Creating APIs for data management and manipulation.",
        "Working with MongoDB as the database system.",
        "Learning about how to best implement security through server-side development to protect user-data and ensure the apps are running fast and as they should."
      ],
    },
    {
      title: "Web Developer",
      company_name: "self",
      icon: html,
      iconBg: "#383E56",
      date: "December 2022 - current date",
      points: [
        "Developing web-applications that use the latest technologies like frameworks and web-sockets for real-time communications",
        "Designing and developing websites from scratch using HTML/CSS/JS.",
        "Maintaining existing projects by fixing bugs and improving performance.",
        "Learning new frameworks such as Angular and Vue.js."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "self",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "December 2022 - current date",
      points: [
        "Developing and maintaining web applications using React.js, Node.js and Next.js",
        "Creating APIs for data management and manipulation.",
        "Working with PostgreSQL as the database system.",
        "Building frontend components using React.js and Redux.",
        "Integration of third party services like Google Maps API and Firebase Authentication."
      ],
    },
    {
      title: "Game Development",
      company_name: "self",
      icon: unreal,
      iconBg: "#E6DEDD",
      date: "June 2023 - current date",
      points: [
        "Using Unreal Engine to create games on PC and mobile platforms.",
        "Implementing game logic and mechanics",
        "Collaborated with artists to design characters and environments",
        "Using phaser and HTML-5 to create interactive games and worlds"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A very hardworking man and very passionate eqipued with the right skills for whatever task you have for him. keep it up!!",
      name: "David Nandwa",
      designation: "CEO",
      company: "HoneyCoin",
      image: dnandwa,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Chris does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Chris optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Maliyo games blog concept",
      description:
        "Web page showcasing the games blog for Maliyo Obi, a prominent Nigerian game maker in the industry",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ml,
      source_code_link: "https://github.com/chriis-fr/gameblog",
      website: "https://gameblogconcept.netlify.app/"
    },
    {
      name: "AI chat application",
      description:
        "Using Gemini api a user is able to communicate with an AI giving similar experience when communicating with chatGPT",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: chrisgpt,
      source_code_link: "https://github.com/chriis-fr/chrisgpt",
      website: "https://chrisgpt-alpha.vercel.app/"
    },
    {
      name: "Land Rover e-comm",
      description:
        "A small react app that acts as a landrover defender e-commerce store that can be further implemented",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: defdef,
      source_code_link: "https://github.com/chriis-fr/defender-comm",
      website: "https://defenderrover.netlify.app/"
    },
    {
      name: "Chris Chat",
      description:
        "A chat app where two or more nodes can connect to and share information using the lates real-time web-socket: socket.io. It is very fast and secure.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        }
        
      ],
      image: chrischat,
      source_code_link: "https://github.com/chriis-fr/talkWme",
      website: "https://chrisodhiambochat.netlify.app/",
    },
    {
      name: "My Portfolio",
      description:
        "This portfolio is an example of a web page created using 3D features and modern react technology and if you'd like a similar one feel free to reach out",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        }
        
      ],
      image: portfolio,
      source_code_link: "https://github.com/chriis-fr/Portfolio",
      website: "https://chrisodhiambo.netlify.app/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Time Waster",
      description:
        "A canvas where you use arrow keys to trace any line and enhance creativity. When overwhelmed with too much work you can waste your time with my canvas.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: wastetime,
      source_code_link: "https://github.com/chriis-fr/wasteYourTime",
    },
    {
      name: "Key Sounds",
      description:
        "A small application that allows any user to press the keys from A through D and play different sounds as per a real drum set.",
      tags: [
        {
          name: "htm",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: drumbox,
      source_code_link: "https://github.com/chriis-fr/key-sounds",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };