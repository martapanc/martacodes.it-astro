import {
  AiFillApple,
  AiFillGithub,
  AiFillYoutube,
  AiOutlineCloud,
} from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { BsSlack, BsTwitch } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaImages,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaRaspberryPi,
} from 'react-icons/fa';
import {
  SiAstro,
  SiDotnet,
  SiFirebase,
  SiGnubash,
  SiGraphql,
  SiIeee,
  SiJavascript,
  SiNextdotjs,
  SiPuppeteer,
  SiPython,
  SiReact,
  SiSpring,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbWorldShare } from 'react-icons/tb';
import { TbBrandKotlin } from 'react-icons/tb';

export const linkIconMapping: Record<string, React.ComponentType> = {
  article: BiNews,
  github: AiFillGithub,
  github2: AiFillGithub,
  publicUrl: TbWorldShare,
  video: AiFillYoutube,
  video2: FaFacebook,
  screenshots: FaImages,
};

export const toolIconMapping: Record<string, React.ComponentType> = {
  agGrid: DiAndroid,
  android: DiAndroid,
  angular: FaAngular,
  apple: AiFillApple,
  astro: SiAstro,
  aws: FaAws,
  bash: SiGnubash,
  bootstrap: FaBootstrap,
  cloud: AiOutlineCloud,
  css: FaCss3Alt,
  dotnet: SiDotnet,
  firebase: SiFirebase,
  graphql: SiGraphql,
  html: FaHtml5,
  ieee: SiIeee,
  java: FaJava,
  javascript: SiJavascript,
  kotlin: TbBrandKotlin,
  nextjs: SiNextdotjs,
  nodejs: FaNodeJs,
  php: FaPhp,
  puppeteer: SiPuppeteer,
  python: SiPython,
  raspberrypi: FaRaspberryPi,
  react: SiReact,
  slack: BsSlack,
  spring: SiSpring,
  strapi: SiStrapi,
  tailwind: SiTailwindcss,
  twitch: BsTwitch,
  typescript: SiTypescript,
  vercel: SiVercel,
};
