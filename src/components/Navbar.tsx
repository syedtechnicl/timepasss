import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Box
      px={4}
      bg={bg}
      color={color}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      position="fixed"
      width="full"
      zIndex={999}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold">
          Portfolio
        </ChakraLink>

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={6}>
            <ChakraLink as={Link} to="/projects">Projects</ChakraLink>
            <ChakraLink as={Link} to="/about">About</ChakraLink>
            <ChakraLink as={Link} to="/contact">Contact</ChakraLink>
          </HStack>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
