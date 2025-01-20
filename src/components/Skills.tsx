import {
  Box,
  SimpleGrid,
  Progress,
  Text,
  useColorModeValue,
  VStack,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiKubernetes, SiFirebase, SiRedux, SiTailwindcss } from 'react-icons/si'

const MotionBox = motion(Box)

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, icon: FaReact },
      { name: 'TypeScript', level: 90, icon: SiTypescript },
      { name: 'JavaScript', level: 95 },
      { name: 'Redux', level: 88, icon: SiRedux },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'TailwindCSS', level: 85, icon: SiTailwindcss },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 92, icon: FaNodeJs },
      { name: 'MongoDB', level: 88, icon: SiMongodb },
      { name: 'Firebase', level: 85, icon: SiFirebase },
      { name: 'REST APIs', level: 90 },
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 85, icon: FaDocker },
      { name: 'AWS', level: 82, icon: FaAws },
      { name: 'Kubernetes', level: 80, icon: SiKubernetes },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 90, icon: FaGitAlt },
    ]
  },
  {
    title: 'Additional Skills',
    skills: [
      { name: 'DSA', level: 95 },
      { name: 'LeetCode 5-Star', level: 98 },
      { name: 'MERN Stack', level: 92 },
      { name: 'System Design', level: 85 },
    ]
  }
]

const Skills = () => {
  const boxBg = useColorModeValue('white', 'gray.700')
  const tagBg = useColorModeValue('blue.50', 'blue.900')

  return (
    <VStack spacing={8} width="full">
      <Wrap spacing={4} justify="center" mb={8}>
        {['DevOps Engineer', 'Full-Stack Developer', 'MERN Stack', 'DSA Expert', 'LeetCode 5-Star'].map((tag) => (
          <WrapItem key={tag}>
            <Tag
              size="lg"
              borderRadius="full"
              variant="subtle"
              bg={tagBg}
              px={6}
              py={2}
              fontSize="md"
            >
              {tag}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>

      {skillCategories.map((category, categoryIndex) => (
        <Box key={category.title} width="full">
          <Heading size="md" mb={4}>{category.title}</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {category.skills.map((skill, index) => (
              <MotionBox
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + categoryIndex * 0.2 }}
              >
                <Box
                  p={4}
                  bg={boxBg}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
                >
                  <VStack align="stretch" spacing={2}>
                    <Flex align="center" justify="space-between">
                      <Flex align="center">
                        {skill.icon && <Icon as={skill.icon} mr={2} boxSize={5} />}
                        <Text fontWeight="medium">{skill.name}</Text>
                      </Flex>
                      <Text fontSize="sm" color="gray.500">
                        {skill.level}%
                      </Text>
                    </Flex>
                    <Progress
                      value={skill.level}
                      size="sm"
                      colorScheme="blue"
                      borderRadius="full"
                      hasStripe
                      isAnimated
                    />
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </VStack>
  )
}

export default Skills
