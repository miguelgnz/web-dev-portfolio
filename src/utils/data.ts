import { FaReact } from "react-icons/fa";
import {
  SiMui,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

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
        id: 2,
        text: "Experience",
        url: "#experience",
      },
      {
        id: 3,
        text: "Projects",
        url: "#projects",
      },
      {
        id: 4,
        text: "Contact",
        url: "#contact",
      },
    ],
  },
};

export const aboutData = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
      id: 3,
      name: "Material UI",
      icon: SiMui,
      color: "#027FFE",
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
      id: 6,
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
  ] as Skill[],
};

export const experienceData = [
  {
    id: 0,
    title: "Senior Software Engineer",
    company: "3Pillar Global",
    startDate: "May 2021",
    endDate: "Present",
    description:
      "Carrot cake pastry chocolate sweet icing. Chocolate bar sugar plum pie biscuit apple pie chupa chups. Croissant biscuit sweet bonbon sweet roll jelly-o halvah chocolate. Tart sugar plum pastry toffee pudding brownie jelly tiramisu",
    skills: ["React", "Node", "TypeScript", "GraphQL", "AWS"],
  },
  {
    id: 1,
    title: "Software Engineer",
    company: "Cognits",
    startDate: "May 2020",
    endDate: "November 2021",
    description:
      "Donut caramels jelly marzipan biscuit pudding tootsie roll. Oat cake pastry tart croissant tiramisu apple pie jelly beans macaroon chocolate. Sweet jelly-o tiramisu sweet pie. ",
    skills: ["React", "Node", "TypeScript", "GraphQL", "AWS"],
  },
  {
    id: 2,
    title: "Software Technical Specialist",
    company: "HCL Technologies",
    startDate: "May 2021",
    endDate: "April 2021",
    description:
      "Powder pudding jelly carrot cake chocolate cake marzipan. Marzipan apple pie dessert apple pie cookie. Dragée chocolate bar gingerbread dragée icing brownie cotton candy ice cream.",
    skills: ["React", "Node", "TypeScript", "GraphQL", "AWS"],
  },
  {
    id: 3,
    title: "Software Helpdesk Specialist",
    company: "Banco Promerica",
    startDate: "May 2019",
    endDate: "January 2020",
    description: "Lorem ipsum",
    skills: ["React", "Node", "TypeScript", "GraphQL", "AWS"],
  },
];
