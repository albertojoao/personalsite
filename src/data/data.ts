import PhaedraLogo from "assets/images/logos/phaedra.jpeg";
import BrainxLogo from "assets/images/logos/brainxtech.png";
import CodenyaLogo from "assets/images/logos/codenya.png";
import BrainplowLogo from "assets/images/logos/brainplow.jpg";
import UniLogo from "assets/images/logos/fast.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

export const companies = [
  {
    title: "Phaedra Solutions",
    alt: "PS image",
    role: "Senior Software Engineer",
    skills: ["ruby", "rails", "typescript", "javascript", "react", "aws"],
    period: "2019 - Present",
    logo: PhaedraLogo
  },
  {
    title: "Brainx Technologies",
    alt: "BT image",
    role: "Software Engineer",
    skills: ["ruby", "rails", "javascript", "python"],
    period: "2018 - 2019",
    logo: BrainxLogo
  },
  {
    title: "Codenya Studio",
    alt: "CS image",
    role: "Co-founder, CTO",
    skills: ["ruby", "rails", "python", "typescript", "react", "aws"],
    period: "2018 - Present",
    logo: CodenyaLogo
  },
  {
    title: "Brainplow",
    alt: "Brainplow image",
    role: "Software Engineer",
    skills: ["javascript", "python", "angular"],
    period: "2017 - 2018",
    logo: BrainplowLogo
  }
];

export const institutes = [
  {
    short_title: "FAST - NUCES",
    title: "National University of Computer and Emerging Sciences",
    alt: "Nuces image",
    role: "Bachelor's Degree in Computer Science",
    skills: ["project management", "web development", "data structures"],
    period: "2013 - 2017",
    startingYear: "2013",
    logo: UniLogo,
    awards: [
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "May 1, 2015"
      },
      {
        title: "Silver Medal",
        description:
          "This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.",
        date: "May 1, 2014"
      },
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "Nov 1, 2013"
      }
    ]
  },
  {
    short_title: "Govt Degree College",
    title: "Govt Degree College",
    alt: "college image",
    role: "FSC",
    skills: ["mathematic", "chemistry", "physics"],
    period: "2011 - 2013",
    startingYear: "2011",
    logo: ""
  }
];

export const skills = [
  
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },

  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },

  {
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com//",
    type: "database",
    image: postgres
  },

  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },

  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Git",
    description: "code version control  ",
    link: "https://git-scm.com/",
    type: "development",
  },
  
];
