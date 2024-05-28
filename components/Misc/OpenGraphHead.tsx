import Head from 'next/head';

const OpenGraphHead = () => (
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
    <meta
      property="og:image"
      content="https://okello-eric.netlify.app/dark.png"
    />
  </Head>
);

export default OpenGraphHead;
