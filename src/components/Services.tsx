import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaReact, FaServer, FaMobile, FaDatabase, FaCloud, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  const boxBg = useColorModeValue('white', 'gray.700')
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Stack
        bg={boxBg}
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        height="full"
        _hover={{ transform: 'translateY(-5px)', transition: '0.2s' }}
      >
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="full"
          bg="blue.500"
          mb={4}
        >
          <Icon as={icon} w={8} h={8} />
        </Flex>
        <Text fontWeight={600} fontSize="lg" mb={2}>{title}</Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>{text}</Text>
      </Stack>
    </MotionBox>
  )
}

const Services = () => {
  return (
    <Box py={12}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Feature
          icon={FaReact}
          title="Frontend Development"
          text="Building responsive and interactive user interfaces using React, Next.js, and modern frontend technologies."
        />
        <Feature
          icon={FaServer}
          title="Backend Development"
          text="Creating robust and scalable server-side applications with Node.js, Express, and TypeScript."
        />
        <Feature
          icon={FaMobile}
          title="Responsive Design"
          text="Developing mobile-first websites that work seamlessly across all devices and screen sizes."
        />
        <Feature
          icon={FaDatabase}
          title="Database Design"
          text="Designing and implementing efficient database solutions using MongoDB, PostgreSQL, and Redis."
        />
        <Feature
          icon={FaCloud}
          title="Cloud Services"
          text="Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Azure."
        />
        <Feature
          icon={FaTools}
          title="DevOps"
          text="Implementing CI/CD pipelines, containerization with Docker, and infrastructure automation."
        />
      </SimpleGrid>
    </Box>
  )
}

export default Services
