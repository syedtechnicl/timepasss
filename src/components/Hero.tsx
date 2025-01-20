import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`

const Hero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.50, purple.50)',
    'linear(to-r, blue.900, purple.900)'
  )

  return (
    <Box
      bgGradient={bgGradient}
      py={20}
      px={8}
      borderRadius="3xl"
      overflow="hidden"
      position="relative"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={10}
      >
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          flex={1}
        >
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            mb={6}
          >
            Transforming Ideas into Digital Reality
          </Heading>
          <Text fontSize="xl" mb={8} maxW="600px">
            Full Stack Developer specializing in creating innovative web solutions
            with cutting-edge technologies.
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            mr={4}
            _hover={{ transform: 'translateY(-2px)' }}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            _hover={{ transform: 'translateY(-2px)' }}
          >
            Contact Me
          </Button>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          flex={1}
          animation={`${float} 6s ease-in-out infinite`}
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="Developer Illustration"
            maxW="500px"
            w="full"
            filter={useColorModeValue('none', 'invert(1)')}
          />
        </MotionBox>
      </Flex>

      {/* Background decoration */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        width="500px"
        height="500px"
        bg="blue.500"
        filter="blur(120px)"
        opacity={0.1}
        borderRadius="full"
      />
    </Box>
  )
}

export default Hero
