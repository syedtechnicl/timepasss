import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCode, FaUserCheck, FaCoffee, FaAward } from 'react-icons/fa'

const MotionBox = motion(Box)

interface StatsCardProps {
  title: string
  stat: string
  icon: React.ElementType
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  const bg = useColorModeValue('white', 'gray.700')

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      rounded={'lg'}
      bg={bg}
    >
      <Icon
        as={icon}
        w={8}
        h={8}
        mb={4}
        color={useColorModeValue('blue.500', 'blue.300')}
      />
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </MotionBox>
  )
}

export default function Stats() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  
  return (
    <Box bg={bg} py={12}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 5, lg: 8 }}>
          <Stat>
            <StatsCard
              title={'Projects Completed'}
              stat={'50+'}
              icon={FaCode}
            />
          </Stat>
          <Stat>
            <StatsCard
              title={'Happy Clients'}
              stat={'100+'}
              icon={FaUserCheck}
            />
          </Stat>
          <Stat>
            <StatsCard
              title={'Hours Coded'}
              stat={'5000+'}
              icon={FaCoffee}
            />
          </Stat>
          <Stat>
            <StatsCard
              title={'Awards Won'}
              stat={'15+'}
              icon={FaAward}
            />
          </Stat>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
