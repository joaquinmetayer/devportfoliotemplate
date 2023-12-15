import React from "react";
import { FaRobot } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Algorithmic Trading",
    location: "Cordoba, ARG",
    description:
      "Design and development of trading systems algorithms and trading indicators using MQL4 for MetaTrader 4, Pine Script for TradingView, C# for Ninja Trader 7 and 8 and strategy building in Ninja Trader 7 and 8 platform.",
    icon: React.createElement(FaRobot),
    date: "May 2018 - Jul 2022",
  },
  {
    title: "The developer carreer starts",
    location: "Cordoba, ARG",
    description:
      "Having spent years developing software, I realized that web development was my calling. So, I began my self-taught studies and enrolled in the CoderHouse educational platform to train as a software engineer, learning the technologies demanded by the market.",
    icon: React.createElement(IoIosRocket),
    date: "Jul 2022",
  },
  {
    title: "Build and sell SasS project",
    location: "Cordoba, ARG",
    description:
      'Creation, design, and development of a unique B2C and B2B solution in LATAM. Automation of processes using WhatsApp in the form of a "chatbot" but with commands to trigger actions to a Python backend that executes functions using Selenium and interacts with +6 platforms. Ask for more info.',
    icon: React.createElement(FaPython),
    date: "Aug 2022 - Jul 2023",
  },
  {
    title: "Angular Frontend Developer",
    location: "Cordoba, ARG",
    description:
      "Starting my job in Junuary, I worked as a frontend developer Angular (sometimes fullstack) for 7 months in a project with Angular and .NET stack.",
    icon: React.createElement(IoLogoAngular),
    date: "Jun 2023 - Jul 2023",
  },
  {
    title: "React Frontend Developer",
    location: "Cordoba, ARG",
    description:
      "I am now a React frontend developer working on a project with the React and Java Spring Boot stack. My core stack and job tasks are in React, but if the team needs help on the backend or with other technologies, I learn and work on that as well.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const coreSkillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "MaterialUI",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Jest",
  "Axios",
  "Redux",
  "Git",
] as const;

export const workedWithData = [
  "Angular",
  "TestBed",
  "Angular Material",
  "React Testing Library",
  "OAuth",
  "Auth0",
  "AWS CodeCommit",
  "AWS CloudWatch",
  "C#",
  "ASP.NET",
  "Entity",
  "xUnit",
  "Python",
  "Selenium",
  "Java",
  "Spring Boot",
  "XAMPP",
  "Oracle",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Firebase Database",
  "Postman",
  "Docker",
  "SASS",
  "Test Drive Development",
  "Payload CMS",
  "Netlify",
  "Prisma",
  "Vercel",
  "LangChain",
  "OpenAI",
  "SonarQube",
  "SonarCloud",
  "And more 😅"
] as const
