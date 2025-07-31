import { IconType } from "react-icons";

import { HiLocationMarker } from "react-icons/hi";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiGlobe,
  PiStar
} from "react-icons/pi";

import { MdOutlineWorkOutline, MdOutlineEmail  } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";


import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaGitlab } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  case: MdOutlineWorkOutline,
  email: HiEnvelope,
  globe: PiGlobe,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  gitlab: FaGitlab,
  linkedin: FaLinkedin,
  language: IoLanguage,
  location: HiLocationMarker,
  mail: MdOutlineEmail,
  star: PiStar,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;