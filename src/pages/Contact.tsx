import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Contact = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: 'Message sent!',
      description: "I'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    
    setIsSubmitting(false)
  }

  return (
    <Box bg={bg} minH="100vh" pt={20}>
      <Container maxW="container.md" py={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading mb={4}>Get in Touch</Heading>
              <Text fontSize="lg">
                Have a question or want to work together? Feel free to reach out!
              </Text>
            </Box>

            <Box
              as="form"
              onSubmit={handleSubmit}
              p={8}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              boxShadow="lg"
            >
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Your name" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your.email@example.com" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Your message"
                    rows={6}
                    resize="vertical"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  isLoading={isSubmitting}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Contact
