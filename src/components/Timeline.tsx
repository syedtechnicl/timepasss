import {
  Box,
  VStack,
  HStack,
  Circle,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const timelineData = [
  {
    year: '2024',
    title: 'Senior DevOps & Full Stack Engineer',
    company: 'Tech Innovation Corp',
    description: 'Leading cloud infrastructure and MERN stack development. Implementing CI/CD pipelines, managing Kubernetes clusters, and developing scalable microservices architecture.',
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    description: 'Developed complex web applications using React, TypeScript, and Node.js. Implemented Docker containerization and AWS cloud services. Achieved LeetCode 5-Star rating.',
  },
  {
    year: '2022',
    title: 'Software Engineer',
    company: 'Web Technologies Ltd',
    description: 'Built responsive web applications using MERN stack. Implemented authentication systems with Firebase, state management with Redux, and styled with TailwindCSS.',
  },
]

const Timeline = () => {
  const lineColor = useColorModeValue('gray.200', 'gray.700')
  const boxBg = useColorModeValue('white', 'gray.700')

  return (
    <VStack spacing={8} align="stretch" position="relative" pl={8}>
      <Box
        position="absolute"
        left="22px"
        top="0"
        bottom="0"
        width="2px"
        bg={lineColor}
      />
      {timelineData.map((item, index) => (
        <MotionBox
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <HStack spacing={4} align="flex-start">
            <Circle
              size="10px"
              bg="blue.500"
              border="2px solid white"
              position="relative"
              zIndex={1}
            />
            <Box
              bg={boxBg}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              flex={1}
              _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
            >
              <Text color="blue.500" fontWeight="bold" fontSize="sm">
                {item.year}
              </Text>
              <Text fontWeight="bold" fontSize="lg" mt={1}>
                {item.title}
              </Text>
              <Text color="gray.500" fontSize="md" mt={1}>
                {item.company}
              </Text>
              <Text mt={2}>{item.description}</Text>
            </Box>
          </HStack>
        </MotionBox>
      ))}
    </VStack>
  )
}

export default Timeline
