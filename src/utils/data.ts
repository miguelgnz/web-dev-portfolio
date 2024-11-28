import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiMui,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

type Skill = {
  id: number;
  name: string;
  icon: IconType;
  color?: string;
};

export const menuData = {
  menu: {
    items: [
      {
        id: 1,
        text: "About",
        url: "#about",
      },
      {
        id: 3,
        text: "Projects",
        url: "#projects",
      },
      {
        id: 2,
        text: "Experience",
        url: "#experience",
      },
    ],
  },
};

export const heroData = {
  nameTitle: "MIGUEL GNZ",
  subtitle: "SOFTWARE DEVELOPER",
  intro: "Crafting stunning web experiences.",
};

export const aboutData = {
  description:
    "As a <span>Web Developer</span> with a solid background in modern web technologies, I specialize in crafting responsive, " +
    "stateful and user-centric web applications. My experience spans across diverse high-impact projects in various " +
    "industries where I have consistently delivered engaging and intuitive web experiences. " +
    "I am a self-driven and <span>quick learner</span> who thrives in agile team environments, always eager to expand my knowledge " +
    "and adapt to new challenges. My commitment to staying current with industry trends and best practices allows me to " +
    "create innovative solutions that align with user needs and business goals.",
  skills: [
    {
      id: 1,
      name: "ReactJS",
      icon: FaReact,
      color: "#139ECA",
    },
    {
      id: 2,
      name: "NextJS",
      icon: SiNextdotjs,
      color: "#D9D9D9",
    },
    {
      id: 4,
      name: "TypeScript",
      icon: SiTypescript,
      color: "#007ACC",
    },
    {
      id: 5,
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      id: 3,
      name: "Material UI",
      icon: SiMui,
      color: "#027FFE",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: " #38B2AC",
    },
    {
      id: 11,
      name: "NodeJS",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      id: 10,
      name: "Express",
      icon: SiExpress,
      color: "#FFF",
    },

    {
      id: 6,
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
  ] as Skill[],
};

type Experience = {
  id: number;
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
};

export const experienceData = [
  {
    id: 0,
    title: "Senior Software Engineer",
    company: "3Pillar Global",
    url: "https://www.3pillarglobal.com/",
    startDate: "Apr 2022",
    endDate: "Sep 2024",
    description:
      "Contributing to distinct projects for different clients, involving the development of a cybersecurity portal, " +
      "where I harnessed the power of Typescript and React to create a robust and secure user interface. In another " +
      "engagement within the healthcare industry, I worked with Next.js, MUI, and Typescript, delivering seamless and " +
      "user-friendly web solutions tailored to the unique demands of this sector. ",
    skills: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "GraphQL",
      "MUI",
      "Styled Components",
    ],
  },
  {
    id: 1,
    title: "Software Engineer",
    company: "Cognits",
    url: "https://cognits.co/",
    startDate: "Jun 2020",
    endDate: "Apr 2022",
    description:
      "Played a pivotal role in shaping digital solutions for the banking industry. I undertook several projects that involved interfacing with banking core systems through API consumption, effectively leveraging JavaScript to integrate critical financial data into user-friendly interfaces. I showcased my frontend skills by crafting responsive UIs using CSS, ensuring an optimal user experience.",
    skills: ["Javascript", "REST API", "CSS Modules"],
  },
  {
    id: 2,
    title: "Software Technical Specialist",
    company: "HCL Tech",
    url: "https://www.hcltech.com/",
    startDate: "Jun 2019",
    endDate: "May 2020",
    description:
      "While my role was centered around the technical field of networking, primarily focusing on delivering intricate solutions for multifunctional printers from a renowned brand. I adeptly tackled the challenges of this niche by providing technical expertise and problem-solving skills to optimize printer functionality. I also delved into the world of software by working with native applications developed using JavaScript.",
    skills: ["Networking", "CISCO", "Javascript"],
  },
  {
    id: 3,
    title: "Freelancer/Selft-taught",
    company: "Freelancer",
    url: "https://www.miguelgnz.com/",
    startDate: "Jun 2016",
    endDate: "Present",
    description:
      "During my journey as a Freelancer and self-taught enthusiast, I've dedicated substantial time to continuous learning and skill development. I've eagerly pursued courses and certifications across a spectrum of cutting-edge web technologies, ensuring that my knowledge remains current and adaptable. Moreover, I've embraced personal projects as valuable learning opportunities, allowing me to put theory into practice and gain hands-on experience.",
    skills: [
      "NextJS",
      "Typescript",
      "MUI",
      "Figma",
      "AWS S3",
      "AWS Cloudfront",
    ],
  },
] as Experience[];

type Project = {
  title: string;
  url: string;
  sourceLink: string;
  description: string;
  image: string;
  skills: string[];
};

export const projectsData = [
  {
    title: "Trello Clone App",
    url: "https://trello-clone-six-dun.vercel.app",
    sourceLink: "https://github.com/miguelgnz/trello-clone-fe",
    description:
      "A clone of the popular project management tool Trello. The app allows users to create boards, lists, and cards, and manage tasks efficiently.",
    image: "/trello_clone.jpg",
    skills: ["NextJS", "React", "Typescript", "Tailwind CSS", "NextUI"],
  },
  {
    title: "Tattoo Studio SPA",
    url: "https://mdt-ui.vercel.app",
    sourceLink: "https://github.com/miguelgnz/mdt_ui",
    description:
      " Responsive single-page application for a local tattoo studio. The site provides comprehensive information about the studio and artists, showcases featured tattoos, and includes essential contact details. The design ensures a seamless experience across all devices.",
    image: "/mdt.png",
    skills: ["NextJS", "React", "Typescript", "MUI"],
  },
  {
    title: "Developer Connector",
    url: "https://dev-connector-prj-fe.onrender.com/",
    sourceLink: "https://github.com/miguelgnz/dev_connector_prj",
    description:
      "A MERN stack application, built while learning web technologies through an online course. Consist in a social media network for developers.",
    image: "/devconnector.png",
    skills: ["MongoDB", "Express", "ReactJS", "NodeJS"],
  },
  {
    title: "Car Seller Landing Page",
    url: "https://miguelgnz.github.io/autotradeprod/",
    sourceLink: "https://github.com/miguelgnz/autotradeprod",
    description:
      "A dynamic and user-friendly single-page web application built using React.js, JavaScript, and CSS. It serves as an online showcase for a local car dealer, offering visitors easy access to vital information.",
    image: "/autotrade.png",
    skills: [
      "Reactjs",
      "Javascript",
      "CSS Modules",
      "AWS S3",
      "AWS Cloudfront",
    ],
  },
] as Project[];

type Contact = {
  linkedin: string;
  github: string;
  credly: string;
};

export const contactData = {
  linkedin: "https://www.linkedin.com/in/miguel-gnz/",
  github: "https://github.com/miguelgnz",
  credly: "https://www.credly.com/users/miguel-gonzalez.4e4d7660",
} as Contact;
