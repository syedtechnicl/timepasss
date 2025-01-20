import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Tag,
  useColorModeValue,
  Link,
  Skeleton,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
    fallbackImage: '/assets/images/project-placeholder.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    demoLink: 'https://ecommerce.demo.com',
    githubLink: 'https://github.com/syedmuqtadeer/ecommerce',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates, team management, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
    fallbackImage: '/assets/images/project-placeholder.jpg',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
    demoLink: 'https://taskmanager.demo.com',
    githubLink: 'https://github.com/syedmuqtadeer/taskmanager',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates high-quality blog posts and social media content.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    fallbackImage: '/assets/images/project-placeholder.jpg',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI', 'Redis'],
    demoLink: 'https://aicontent.demo.com',
    githubLink: 'https://github.com/syedmuqtadeer/ai-content',
  },
  {
    title: 'Real Estate Platform',
    description: 'A modern real estate platform with virtual tours, property management, and advanced search capabilities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60',
    fallbackImage: '/assets/images/project-placeholder.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Google Maps API'],
    demoLink: 'https://realestate.demo.com',
    githubLink: 'https://github.com/syedmuqtadeer/realestate',
  },
]

const Projects = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({})

  const handleImageLoad = (projectTitle: string) => {
    setImageLoaded(prev => ({ ...prev, [projectTitle]: true }))
  }

  return (
    <Box bg={bg} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={10}>
        <Heading mb={10}>My Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                bg={cardBg}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-5px)', transition: '0.2s' }}
              >
                <Skeleton isLoaded={imageLoaded[project.title]}>
                  <Box position="relative" height="200px">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                      onLoad={() => handleImageLoad(project.title)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60';
                      }}
                    />
                  </Box>
                </Skeleton>
                <VStack p={6} align="start" spacing={3}>
                  <Heading size="md">{project.title}</Heading>
                  <Text>{project.description}</Text>
                  <Box>
                    {project.tags.map((tag) => (
                      <Tag key={tag} mr={2} mt={2}>
                        {tag}
                      </Tag>
                    ))}
                  </Box>
                  <Box>
                    <Link href={project.demoLink} isExternal color="blue.500" mr={4}>
                      Live Demo
                    </Link>
                    <Link href={project.githubLink} isExternal color="blue.500">
                      GitHub
                    </Link>
                  </Box>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Projects
