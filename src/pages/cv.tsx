import { Box, BoxProps, Flex, HStack, Link, SimpleGrid, StackDivider, Tag, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TbBriefcase, TbCalendarTime, TbLink, TbPhone } from 'react-icons/tb';
import Avatar from '../../public/images/cv/avatar.png';
import LogoCloudflight from '../../public/images/cv/cloudflight.png';
import LogoMTS from '../../public/images/cv/myticketshop.png';
import LogoSnappify from '../../public/images/cv/snappify.png';
import LogoUntis from '../../public/images/cv/untis.jpeg';
import LogoWikifolio from '../../public/images/cv/wikifolio.png';
import { StandardImage } from '../components/standard-image';

const Card = (props: BoxProps) => <Box bg="white" rounded="xl" border="1px" borderColor="gray.200" p={5} {...props} />;

interface Experience {
  logo: ReactNode;
  name: string;
  role: string;
  tags: ReactNode;
  time: string;
  description?: ReactNode;
}

const EXPERIENCES: Experience[] = [
  {
    logo: <StandardImage priority loading="eager" src={LogoSnappify} alt="Logo of snappify" width={50} height="40px" />,
    name: 'snappify.com',
    role: 'Allrounder',
    tags: (
      <>
        <Tag size="sm" colorScheme="orange">
          Side Project
        </Tag>
      </>
    ),
    time: 'Since Feb 21',
    description: 'Building the next-gen presentation tool for developers.',
  },
  {
    logo: <StandardImage priority loading="eager" src={LogoMTS} alt="Logo of MyTicketShop" width={50} height={50} />,
    name: 'MyTicket Shop',
    role: 'Sr. Frontend Developer',
    tags: (
      <>
        <Tag size="sm" colorScheme="purple">
          Freelancer
        </Tag>
      </>
    ),
    time: 'May 22 - Nov 22',
  },
  {
    logo: <StandardImage priority loading="eager" src={LogoWikifolio} alt="Logo of wikifolio" width={50} height={50} />,
    name: 'wikifolio.com',
    role: 'Sr. Frontend Developer',
    tags: (
      <>
        <Tag size="sm" colorScheme="purple">
          Freelancer
        </Tag>
      </>
    ),
    time: 'Apr 21 - Jan 22',
    description:
      'Responsible for setting up the new Frontend Architecture using React & Next.js. Introduced a Design System and worked on significant features.',
  },
  {
    logo: <StandardImage priority loading="eager" src={LogoUntis} alt="Logo of Untis" width={50} height={50} />,
    name: 'Untis GmbH',
    role: 'Sr. Frontend Developer',
    tags: (
      <>
        <Tag size="sm" colorScheme="green">
          Full-Time
        </Tag>
      </>
    ),
    time: 'Apr 19 - Mar 21',
  },
  {
    logo: (
      <StandardImage priority loading="eager" src={LogoCloudflight} alt="Logo of Cloudflight" width={50} height={50} />
    ),
    name: 'Cloudflight GmbH',
    role: 'Sr. Developer / Teamlead',
    tags: (
      <>
        <Tag size="sm" colorScheme="green">
          Full-Time
        </Tag>
      </>
    ),
    time: 'Aug 15 - Mar 19',
  },
];

const SKILLS = ['TypeScript', 'React', 'Next.js', 'Node.js', 'ChakraUI', 'Postgres', 'HTML', 'CSS', 'GraphQL'];

export default function Page() {
  return (
    <Box bg="gray.100" minH="100vh" p={5}>
      <Flex maxW="1024px" mx="auto" gap={4}>
        <Flex flexShrink={0} direction="column" gap={4}>
          <Card>
            <Flex align="center" gap={4}>
              <StandardImage
                priority
                loading="eager"
                src={Avatar}
                alt="Avatar of Dominik Sumer"
                width={70}
                height={70}
                filter="drop-shadow(0 0 20px rgba(0,0,0,0.14))"
                transform="translateZ(0)"
                bg="gray.400"
                rounded="lg"
              />
              <Flex direction="column" gap={1}>
                <Text fontSize="20px" fontWeight="semibold">
                  Dominik Sumer
                </Text>
                <Text fontSize="16px" color="gray.600">
                  Senior Web Developer
                </Text>
              </Flex>
            </Flex>
          </Card>
          <Card w="100%">
            <Text fontSize="lg" fontWeight="semibold">
              Information
            </Text>
            <SimpleGrid mt={4} columns={2} rowGap={3}>
              <Text color="gray.600">Location</Text>
              <Text fontWeight="semibold" textAlign="right">
                Vienna
              </Text>
              <Text color="gray.600">Experience</Text>
              <Text fontWeight="semibold" textAlign="right">
                10+ years
              </Text>
              <Text color="gray.600">Contract Type</Text>
              <Text fontWeight="semibold" textAlign="right">
                Freelancer
              </Text>
            </SimpleGrid>
          </Card>
          <Card w="100%">
            <Text fontSize="lg" fontWeight="semibold">
              Skills
            </Text>
            <Flex maxW="230px" mt={3} gap={2} flexWrap="wrap">
              {SKILLS.map((skill) => (
                <Tag key={skill} size="md" fontSize="13px">
                  {skill}
                </Tag>
              ))}
            </Flex>
          </Card>
        </Flex>
        <Flex flexGrow={1} direction="column" gap={4}>
          <Card py={3}>
            <Flex direction="column" gap={2}>
              <Text fontSize="xl" fontWeight="semibold">
                About me
              </Text>
              <Text fontSize="17px" color="gray.700">
                I have a strong passion for developing complex Web Applications.
              </Text>
              <Text fontSize="17px" color="gray.700">
                My main focus lies on the Frontend, delivering UIs with great UX using React. I&apos;ve worked on
                several large-scale projects and built a profound knowledge of building superior web app solutions.
              </Text>
              <Flex mt={3} justify="space-between">
                <Flex gap={3}>
                  <Flex as={Link} target="_blank" href="https://www.linkedin.com/in/dominik-sumer/" pos="relative">
                    <Box
                      position="absolute"
                      left="0px"
                      top="0px"
                      boxSize="14px"
                      bg="white"
                      transform="translate(2px, 2px)"
                    />
                    <Box pos="relative" as={FaLinkedin} boxSize="24px" color="#0a66c2" />
                  </Flex>
                  <Link target="_blank" href="https://twitter.com/dominiksumer">
                    <Box as={FaTwitter} boxSize="24px" color="#1fa1f1" />
                  </Link>
                  <Link target="_blank" href="https://github.com/dsumer">
                    <Box as={FaGithub} boxSize="24px" color="github" />
                  </Link>
                </Flex>
                <HStack fontSize="sm" spacing={2} divider={<StackDivider />}>
                  <Flex align="center" gap={1}>
                    <Box boxSize="16px" as={TbLink} />
                    <Link href="https://seriouscode.io" isExternal>
                      seriouscode.io
                    </Link>
                  </Flex>
                  <Flex align="center" gap={1}>
                    <Box boxSize="16px" as={TbPhone} />
                    <Link href="tel:+4369918162442">+43 699 181 624 42</Link>
                  </Flex>
                </HStack>
              </Flex>
            </Flex>
          </Card>
          <Card w="100%">
            <Text fontSize="xl" fontWeight="semibold">
              Experience
            </Text>
            <VStack mt={4} spacing={6} divider={<StackDivider borderColor="gray.100" />}>
              {EXPERIENCES.map((experience, index) => (
                <Flex key={index} gap={4} w="100%">
                  <Box flexShrink={0}>{experience.logo}</Box>
                  <Flex direction="column" w="100%" gap={2}>
                    <Flex justify="space-between">
                      <Text fontSize="lg" fontWeight="semibold">
                        {experience.name}
                      </Text>
                      <Flex gap={2}>{experience.tags}</Flex>
                    </Flex>
                    <Flex justify="space-between">
                      <Flex color="gray.600" align="center" gap={1}>
                        <Box boxSize="16px" as={TbBriefcase} />
                        <Text fontSize="sm">{experience.role}</Text>
                      </Flex>
                      <Flex color="gray.600" align="center" gap={1}>
                        <Box boxSize="16px" as={TbCalendarTime} />
                        <Text fontSize="sm">{experience.time}</Text>
                      </Flex>
                    </Flex>
                    {experience.description && <Text>{experience.description}</Text>}
                  </Flex>
                </Flex>
              ))}
            </VStack>
          </Card>
        </Flex>
      </Flex>
    </Box>
  );
}
