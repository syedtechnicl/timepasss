import {
  Box,
  Flex,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Container,
  Heading,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const MotionBox = motion(Box)

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60',
    content: 'Syed is an exceptional developer who consistently delivers high-quality code. His expertise in both frontend and backend technologies made our project a success.',
  },
  {
    name: 'Michael Chen',
    position: 'Lead Developer at StartupX',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60',
    content: 'Working with Syed was a great experience. His knowledge of DevOps practices and cloud technologies helped us streamline our deployment process significantly.',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Product Manager at InnovateLabs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60',
    content: 'Syed's problem-solving abilities are remarkable. He not only delivered the features we needed but also suggested improvements that made our product even better.',
  },
]

const Testimonials = () => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const cardBg = useColorModeValue('white', 'gray.800')
  const quoteBg = useColorModeValue('blue.50', 'blue.900')

  return (
    <Box py={16} bg={bg}>
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={12}>Client Testimonials</Heading>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justify="center"
        >
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              flex={{ base: '1 1 100%', md: '1 1 45%', lg: '1 1 30%' }}
              maxW={{ base: '100%', md: '45%', lg: '30%' }}
            >
              <Stack
                bg={cardBg}
                boxShadow="lg"
                p={8}
                rounded="lg"
                position="relative"
                _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
              >
                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  bg={quoteBg}
                  p={3}
                  rounded="full"
                >
                  <Icon as={FaQuoteLeft} boxSize={4} color="blue.500" />
                </Box>
                <Text fontSize="md" pt={6}>
                  {testimonial.content}
                </Text>
                <Flex align="center" mt={8}>
                  <Avatar
                    src={testimonial.image}
                    name={testimonial.name}
                    size="md"
                    mr={4}
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize="sm">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.position}
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            </MotionBox>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default Testimonials
