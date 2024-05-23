import { IconType } from 'react-icons'
import { SiX } from "react-icons/si";

import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,

} from 'react-icons/fa'
import {
  SiTwitter,
} from 'react-icons/si'
type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'Twitter',
  //   href: 'https://twitter.com/keysl1831',
  //   icon: SiTwitter,
  // },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/e_cruise_',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/okello-eric',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/',
    icon: FaStackOverflow,
  },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/okello-eric-denis',
    icon: FaGithub,
  },
  // {
  //   label: 'Dev.to',
  //   href: 'https://dev.to/',
  //   icon: FaDev,
  // },
]
