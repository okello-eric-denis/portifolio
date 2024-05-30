import Head from 'next/head'
import { useColorMode } from '@chakra-ui/react'

const OpenGraphHead = () => {
  const { colorMode } = useColorMode()
  const imageSrc =
    colorMode === 'light'
      ? 'https://okello-eric.netlify.app/light.png'
      : 'https://okello-eric.netlify.app/dark.png'

  return (
    <Head>
      <title>Okello Eric | Computer Engineer</title>
      <meta
        name="description"
        content="My personal solace palace on web-earth."
      />
      <meta property="og:title" content="Okello Eric | Computer Engineer" />
      <meta property="og:site_name" content="Okello Eric Portfolio" />
      <meta property="og:url" content="https://okello-eric.netlify.app/" />
      <meta
        property="og:description"
        content="Hello there! I am Okello Eric. Or you could call me E_Cruise. That works too . . . I am a Computer Engineer"
      />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content={imageSrc} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default OpenGraphHead
