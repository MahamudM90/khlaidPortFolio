import library from './FontAwsomeLibery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faFire } from '@fortawesome/free-solid-svg-icons';
library()


//  gretting option
const greeting = {
  username: "Md Khalid Hossain",
  title: "Hi, All",
  subTitle:
    "A passionate Frontend Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1WaZAya5VttcqUSpsQ0kAodP-0Jo_RvJz",
  displayGreeting: true
};
// social media section
const socialMediaLinks = {
  github: "https://github.com/shakil51298",
  linkedin: "https://www.linkedin.com/in/shakil51298/",
  gmail: "zikaiwen02@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/yeohanshakil/",
  medium: "https://shakil27512.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/14954307/user14954307",
  instagram: 'https://www.instagram.com/sh.akil5626/',
  twitter: 'https://twitter.com/MdKhali45307271',
  display: true
};


// Skill Sections
const skills = {
  title: "What i do",
  desc: "I'M A JUNIOR DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skillTitle: [
    "⚡ Develop highly interactive Front end  web applications",
    "⚡Integration of third party services such as Firebase",
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      icon: <FontAwesomeIcon icon={['fab', 'html5']} />
    },
    {
      skillName: "css3",
      icon: <FontAwesomeIcon icon={['fab', 'css3']} />
    },
    {
      skillName: "sass",
      icon: <FontAwesomeIcon icon={['fab', 'sass']} />
    },
    {
      skillName: "Javascript",
      icon: <FontAwesomeIcon icon={['fab', 'js']} />
    },
    {
      skillName: "reactjs",
      icon: <FontAwesomeIcon icon={['fab', 'react']} />
    },
    {
      skillName: "nodejs",
      icon: <FontAwesomeIcon icon={['fab', 'node']} />
    },
    {
      skillName: "swift",
      icon: <FontAwesomeIcon icon={['fab', 'swift']} />
    },
    {
      skillName: "npm",
      icon: <FontAwesomeIcon icon={['fab', 'npm']} />
    },
    {
      skillName: "database",
      icon: <FontAwesomeIcon icon={faDatabase} />
    },
    {
      skillName: "firebase",
      icon: <FontAwesomeIcon icon={faFire} />
    }
  ]
};
// tech stack 
const techStack = [
  {
    type: "Frontend / Design",
    level: "80"
  },
  {
    type: "Backend",
    level: "40"
  },
  {
    type: "Programming",
    level: "90"
  }
];


const experience = [

  {
    role: "Software Engineer",
    company: "Pustok",
    companylogo: " ",
    date: "20 Feb 2021 – 25 Feb 2021",
    desc:
      "I have maintained the backend and api",
  },
  {
    role: "Designer and Developer",
    company: "Didi Chaoxing",
    companylogo: "",
    date: "January 2021 – February 2021",
    desc:
      "I lead myself building the API for this Ride Sharing application"
  },
  {
    role: "Designer",
    company: "Bd Crick time",
    companylogo: "",
    date: "November 2018 – July 2019",
    desc:
      "I have designed all of this site's"
  }
];
const blogs = {
  title: "Blogs",
  subTitle: "with love for developing cool stuff , I love to write and tech others what i have learnt",
  blogs: [
    {
      url: 'https://shakil27512.medium.com/five-java-script-fundamentals-that-you-need-to-know-d3e6f6dbdb8a',
      title: 'Five Java Script Fundamentals that you need to know',
      desc: 'For those of us who are completely new to programming, the first thing we need to know that what is variables? You can imagine that variable is a kind of box that you can declare any right place for your needs and can save any kind of value(array, string, number, bullian, object, function) inside this variable. for example, you are saying that “Mc Jhon is a good boy.'
    },
    {
      url: 'https://shakil27512.medium.com/five-java-script-fundamentals-that-you-need-to-know-d3e6f6dbdb8a',
      title: 'Five Java Script Fundamentals that you need to know ',
      desc: 'For those of us who are completely new to programming, the first thing we need to know that what is variables? You can imagine that variable is a kind of box that you can declare any right place for your needs and can save any kind of value(array, string, number, bullian, object, function) inside this variable. for example, you are saying that “Mc Jhon is a good boy.'
    }
  ]
};
//  Contact form
const contactData = {
  title : "Contact Me",
  desc : 'DISCUSS OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.',
  phone : "+86 18579191038 (whatsapp/wechat)",
  email : "zikaiwen02@gmail.com",
}

// footer data
const footerData = {
  desc : "This Template by Md Khalid Hossain",
  url : "www.github.com/shakil51298"
}
export {
  socialMediaLinks,
  greeting,
  skills,
  techStack,
  experience,
  blogs,
  contactData,
  footerData
}