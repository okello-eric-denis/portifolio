import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'NCBS' | 'Logos' | 'Fundi'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: ' J van der Vlist Holding B.V ',
    longName: ' J van der Vlist Holding B.V ',
    subDetail: 'RPA Developer. Robomotion',
    url: 'https://www2.JvanderVlistHoldingB.V.com/',
    position: 'RPA Engineer',
    duration: 'Jan 2024 - Present',
    logo: {
      light: '/worked_at_logos/robomotion/rpa.webp',
      dark: '/worked_at_logos/robomotion/rpa.webp',
    },
    roles: [
      <>
        Contributed to the design and development of a Robotic Process
        Automation flows using Robomotion tools. Webscraping and databbase
        Update for real Estates in Bonaire. Integration of APIs for data
        fetching of weather forecast in the Bonaire region. Integration of
        OpenAI and image generation API for Auto-generation of website content
        and images.
      </>,
      <>
        Configuring of the Robomotion SEO writer Application for SEO content
        generation
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.robomotion.io/"
          target="_blank"
          rel="noreferrer"
        >
          SEO writer Application
        </Link>
      </>,
      <>
        Undergone training for advanced Automation and Remote work, API and AI
        integration and different applications of RPA to enhance businesses.
      </>,
    ],
  },
  NCBS: {
    name: 'Nile Center Business Support',
    longName: ' NCBS',
    subDetail: 'via Remote',
    url: 'https://ncbs.io/',
    position: 'IT Support Officer',
    duration: 'Dec 2023 - Present',
    logo: {
      light: '/worked_at_logos/ncbs/ncbs_white.png',
      dark: '/worked_at_logos/ncbs/ncbs.jpg',
    },
    roles: [
      <>
        Trainship for Remote work {''}
        Providing IT support Development of the company website.
      </>,
      <>
        Joined different course for soft skills, Problem solving and critical
        thinking.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://ncbs.io/"
          target="_blank"
          rel="noreferrer"
        >
          NCBS
        </Link>{' '}
        main site developed with wordpress.
      </>,
      <>Troubleshooting Computer Hardware issues.</>,
      <>Team work and collaboration to ensure productivity.</>,
    ],
  },
  Logos: {
    name: 'Logos',
    longName: 'Logos Africa',
    subDetail: 'Logos Africa.',
    url: 'https://logosafrica.com/',
    position: 'Software Developer (Intern)',
    duration: 'Jan 2023 - March 2023',
    logo: {
      light: '/worked_at_logos/logos/logos.jpeg',
      dark: '/worked_at_logos/logos/logos.jpeg',
    },
    roles: [
      <>
        Designing and developing websites using CMS like WordPress and Drupal.
      </>,
      <>Front-end web development using ReactJS and Next JS.</>,
      <>
        Deploying websites, configuring host environments and managing domain
        settings, using cPanel, FTP, and hosting platforms.
      </>,
      <>
        Identifying and resolving issues with websites, such as broken links,
        layout problems and coding errors.
      </>,
      <>
        Collaborative development and using git for code management and version
        control.
      </>,
    ],
  },
  Fundi: {
    name: 'Fundi Bots',
    longName: 'Fundi Bots',
    subDetail: 'Fundi Bots Uganda.',
    url: 'https://fundibots.org/',
    position: 'Embedded Systems Engineer (Intern)',
    duration: 'Feb 2022 - May 2022',
    logo: {
      light: '/worked_at_logos/fundi/fundi_bots.png',
      dark: '/worked_at_logos/fundi/fundi_bots.png',
    },
    roles: [
      <>Using Fritzing and Proteus for designing Circuits.</>,
      <>
        Design and development of integrated circuits with components like
        resistors, capacitors, transistors among others.
      </>,
      <>
        Embedded systems development using Arduino interface with C programming.
      </>,
      <>
        Integration of sensors like ultrasonic sensors, PIR sensors, Flow rate
        sensors, RFID modules, Flex sensors among others with Arduino interfaces
        to come up with functional projects.
      </>,
      <>
        Development of mobile Application using App inventors for interfacing
        with Arduino.
      </>,
      <>Use of Solid works for design of solid works.</>,
      <>Printing of Solid works elements using 3D printer.</>,
      <>Project management and reporting through weekly plans.</>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.NCBS,
  Experiences.Logos,
  Experiences.Fundi,
]
