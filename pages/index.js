import NextLink from 'next/link'
import { Container, 
    Button,
    Box, 
    Heading, 
    Image,
    Link, 
    List,
    ListItem,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem} from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer based in Atlanta!
      </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Garrett McGuire
            </Heading>
            <p>Software engineer & cyber-security Enthusiast</p>
            </Box>   
            <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center">
                <Image borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRaidius="full" 
                src="/images/uncroppedPic.jpeg" 
                alt="ProfilePicture"/>
            </Box>
            </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
                Hello, My name is Garrett and I'm a software engineer. I'm currently a Junior
                at Kennesaw State University, and love spending my time reading, hacking(ethically of course), and building 
                projects that challenge me. Check out my {''}
                <NextLink href="https://github.com/0xGrizzly">
                    <Link>
                        GitHub
                    </Link>
                </NextLink>
                .
            </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
        </Section>   

        <Section delay={.2}>
        <Heading as="h3" variant="section-title">
                Bio
        </Heading>
        <BioSection>
            <BioYear>1996</BioYear>
            Born in Atlanta, Georgia.
        </BioSection>
        <BioSection>
            <BioYear>2016</BioYear>
            Began my coding journey and developed websites for multiple businesses.
        </BioSection>
        <BioSection>
            <BioYear>2020</BioYear>
            Enrolled into Kennesaw State University's B.S Software Engineering program.
        </BioSection>
        <BioSection>
            <BioYear>2022</BioYear>
            Work as a Cyber Threat Intelligence Analyst Intern. 
            </BioSection>
         <BioSection>
            <BioYear>2023</BioYear>
            Starting my career as a Cyber Software Engineer.
            </BioSection>   
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        RockClimbing, Video Games, Reading, Hacking, & my dog Kylo.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <List>
        <ListItem>
            <Link href="https://github.com/0xGrizzly" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @0xGrizzly
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/garrett_mcguire" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram/>}
              >
                @garrett_mcguire
              </Button>
            </Link>
          </ListItem>
          <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord/>}
              >
                @solodev#7667
              </Button>
          </ListItem>
        </List>
        </Section>
        </Container>
        </Layout>
    )
} 

export default Page
