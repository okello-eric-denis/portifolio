import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box ,Input,Button,Textarea} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
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
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
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
        <div>
          <Heading>
          Contact Form 
          </Heading>
        </div>
        <FormControl>
      <FormLabel>Name
      <Input type='text' 
      placeholder='okello eric'/>
      </FormLabel>
      <FormLabel>Email address
      <Input type='email'
      placeholder='user@domain.com'/>
      </FormLabel>
      <FormLabel>Subject
      <Input type='text' 
      placeholder='Mobile App development'/>
      </FormLabel>
      <FormLabel>Message
      <Textarea placeholder='How may i help you'/> 
      </FormLabel>
      <Button className={styles.button}>
        Submit
      </Button>
       </FormControl>
      </Box>
      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}>
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/okello-eric-denis"
          target="_blank"
          _focus={{ boxShadow: 'none' }}>
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            Okello Eric <Icon as={RiCopyleftLine} /> 2024
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
