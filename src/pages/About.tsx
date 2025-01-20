import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Services from '../components/Services'

const MotionBox = motion(Box)

const About = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box bg={bg} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={16} align="start">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            w="full"
          >
            <Heading mb={6}>About Me</Heading>
            <Text fontSize="lg" maxW="800px">
              Hi, I'm Syed Muqtadeer, a passionate DevOps and Full Stack Engineer with expertise in modern web technologies.
              I specialize in building scalable applications using the MERN stack (MongoDB, Express, React, Node.js) and implementing
              robust DevOps practices. As a LeetCode 5-Star rated programmer, I bring strong problem-solving skills and deep
              understanding of Data Structures and Algorithms to every project.
            </Text>
            <Text fontSize="lg" mt={4} maxW="800px">
              My technical journey spans across full-stack development, cloud infrastructure, and system design. I'm proficient
              in containerization with Docker, orchestration with Kubernetes, and cloud services on AWS. I have a strong foundation
              in modern frontend technologies including React, TypeScript, and TailwindCSS, coupled with extensive backend
              experience in Node.js and MongoDB.
            </Text>
          </MotionBox>

          <Divider />

          <Box w="full">
            <Heading size="lg" mb={8}>My Skills</Heading>
            <Skills />
          </Box>

          <Divider />

          <Box w="full">
            <Heading size="lg" mb={8}>Services I Offer</Heading>
            <Services />
          </Box>

          <Divider />

          <Box w="full">
            <Heading size="lg" mb={8}>Experience</Heading>
            <Timeline />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
