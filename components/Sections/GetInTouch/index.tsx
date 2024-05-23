import { memo, useRef } from 'react'
import { 
  Heading, 
  Text, 
  Stack, 
  Link, 
  Icon, 
  Box, 
  Input, 
  Button, 
  Textarea, 
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, } from '@chakra-ui/react'
import {simpleOpacity,} from 'config/animations'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import styles from './styles.module.css'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const currentYear = new Date().getFullYear();
  const MotionButton = motion(Button)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_e2po6ur', 'template_rzbuidn', form.current, 'R5M3kGVatDHsUH16x')
      .then((result) => {
        <Alert>
           <AlertIcon />
          Email sent. Thank you for contacting me!
        </Alert>
        console.log(result.text)
        alert('Submitted successfully')
      }, (error) => {
        console.log(error.text)
        alert('Error')
      })
  }

  const [ref, inView] = useInView()

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Get In Touch!{' '}
      </Heading>
      <Text variant="description">
        Though, I am fairly introverted myself. I do reply to messages as long
        as my human interaction battery lasts. Coding, work, movies or even weeb
        stuff, anything is cool. So feel free to message me on any of my social
        media or shoot me an{' '}
        <Link
          href="mailto:okelloericdenis@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
      </Text>
      <Box>
        <Heading>Contact Form</Heading>
        <form ref={form} onSubmit={sendEmail}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='okello eric' name='name' />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='user@domain.com' name='email' />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Subject</FormLabel>
            <Input type='text' placeholder='Mobile app development' name='subject' />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder='How may I help you' name='message' />
          </FormControl>
          <Button mt={4} className={styles.button} type='submit'>
            Submit
          </Button>
        </form>
      </Box>
      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/okello-eric-denis"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            Okello Eric <Icon as={RiCopyleftLine} /> {currentYear}
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
