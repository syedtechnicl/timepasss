import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Home = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Box bg={bg} color={color} minH="100vh" pt={20}>
      <Container maxW="container.lg">
        <VStack spacing={8} alignItems="flex-start" py={20}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" mb={4}>
              Hi, I'm Syed Muqtadeer
            </Heading>
            <Text fontSize="xl" mb={6}>
              DevOps and Full-Stack Engineer | MERN Stack Expert
            </Text>
            <Text fontSize="lg" maxW="600px" mb={8}>
              Passionate Full Stack Developer with expertise in MERN Stack, DevOps, and Cloud technologies.
              LeetCode 5-Star rated programmer with strong DSA skills. Specialized in building scalable applications
              using React, Node.js, TypeScript, and modern cloud infrastructure with Docker and Kubernetes.
            </Text>
            <HStack spacing={4}>
              <Button
                as="a"
                href="#contact"
                colorScheme="blue"
                size="lg"
              >
                Get in Touch
              </Button>
              <Button
                as="a"
                href="#projects"
                variant="outline"
                size="lg"
              >
                View Projects
              </Button>
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <HStack spacing={6} mt={8}>
              <Icon as={FaGithub} w={6} h={6} cursor="pointer" />
              <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" />
              <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home
