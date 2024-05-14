import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'NCBS' | 'Logos'| 'Fundi'

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
       Contributed to the design and development of a Robotic Process Automation flows using Robomotion tools.
       Webscraping and databbase Update for real Estates in Bonaire.
       Integration of APIs for data fetching of weather forecast in the Bonaire region.
       Integration of OpenAI and image generation API for Auto-generation of website content and images.
      </>,
      <>
       Configuring of the Robomotion SEO writer Application for SEO content generation
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.robomotion.io/"
          target="_blank"
          rel="noreferrer">
            SEO writer Application
         </Link>
        </>,
      <>
        Undergone training for advanced Automation and Remote work,
        API and AI integration and different applications of RPA to enhance businesses.
        {/* <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification.
        </Link> */}
      </>,
    ],
  },
  NCBS: {
    name: 'Nile Center Business Support',
    longName: ' NCBS',
    subDetail: 'via Prosource BPO',
    url: 'https://ncbs.io/',
    position: 'IT Support Officer',
    duration: 'Dec 2023 - Present',
    logo: {
      light: '/worked_at_logos/ncbs/ncbs.jpg',
      dark: '/worked_at_logos/ncbs/ncbs.jpg',
    },
    roles: [
      <>
       Trainship for Remote work {""}
        {/* <Link
          aria-label="NCBS"
          href="https://ncbs.io/"
          target="_blank"
          rel="noreferrer"
        >
          NCBS {""}
        </Link> */}
        Providing IT support
        Development of the company website.
      </>,
      <>
       Joined different course for  soft skills, Problem solving and critical thinking.
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
      <>
        Migrating of existing marketing email related tools and batch jobs from
        Responsys into new platform called Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new
        marketing vendor that can scale and also enable us to have
        personalisation as well, selecting{' '}
        <Link
          aria-label="Braze"
          href="https://www.braze.com/"
          target="_blank"
          rel="noreferrer"
        >
          Braze
        </Link>{' '}
        as a result.
      </>,
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
        Hands on experience in designing and developing websites using WordPress, Next.Js, React
        Js, PHP frameworks, CSS, JavaScript, HTML and various web technologies.
      </>,
      <>
       Development of Websites using ReactJs, Next Js..
      </>,
      <>
       Deploying websites, configuring host environments and managing domain settings, using
       cPanel, FTP, and  hosting platforms like Digital Ocean.
      </>,
      <>
       Created and managed databases using MySQL.
      </>,
      <>
      Using version control systems like Git for collaborative development and code
      management.
      </>
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
      <>
        Hands on experience in designing and developing websites using WordPress, Next.Js, React
        Js, PHP frameworks, CSS, JavaScript, HTML and various web technologies.
      </>,
      <>
       Development of Websites using ReactJs, Next Js..
      </>,
      <>
       Deploying websites, configuring host environments and managing domain settings, using
       cPanel, FTP, and  hosting platforms like Digital Ocean.
      </>,
      <>
       Created and managed databases using MySQL.
      </>,
      <>
      Using version control systems like Git for collaborative development and code
      management.
      </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.NCBS,
  Experiences.Logos,
  Experiences.Fundi,
]
