import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Image,
  Tag,
  HStack,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const blogPosts = [
  {
    title: 'Building Scalable Applications with Kubernetes',
    excerpt: 'Learn how to deploy and manage containerized applications at scale using Kubernetes...',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&auto=format&fit=crop&q=60',
    date: 'Jan 15, 2025',
    tags: ['DevOps', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Modern State Management in React Applications',
    excerpt: 'Exploring different state management solutions in React and when to use them...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60',
    date: 'Jan 10, 2025',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    title: 'Implementing CI/CD Pipelines with GitHub Actions',
    excerpt: 'A comprehensive guide to setting up automated workflows using GitHub Actions...',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&auto=format&fit=crop&q=60',
    date: 'Jan 5, 2025',
    tags: ['DevOps', 'CI/CD', 'GitHub'],
  },
]

const Blog = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bg} py={16}>
      <Container maxW="container.xl">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading fontSize={'3xl'}>Latest Blog Posts</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Insights and tutorials about web development, DevOps, and software engineering
          </Text>
        </Stack>

        <Stack spacing={8} direction={{ base: 'column', lg: 'row' }}>
          {blogPosts.map((post, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              maxW={{ base: '100%', lg: '33%' }}
              w={'full'}
            >
              <Box
                bg={cardBg}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
              >
                <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </Box>
                <Stack>
                  <HStack spacing={2} mb={2}>
                    {post.tags.map((tag) => (
                      <Tag key={tag} size={'sm'} variant="subtle" colorScheme="blue">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <Text color={'gray.500'} fontSize={'sm'}>
                    {post.date}
                  </Text>
                  <Heading
                    fontSize={'xl'}
                    fontFamily={'body'}
                    _hover={{ color: 'blue.500', cursor: 'pointer' }}
                  >
                    {post.title}
                  </Heading>
                  <Text color={'gray.500'}>{post.excerpt}</Text>
                </Stack>
                <Button
                  mt={4}
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                  w="full"
                >
                  Read More
                </Button>
              </Box>
            </MotionBox>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Blog
