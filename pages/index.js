import NextLink from 'next/link'
import { Container, 
    Button,
    Box, 
    Heading, 
    Image,
    Link, 
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg="useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')" p={3} mb={6} align="center">
                Hello, I&apos;m a software engineer based in Atlanta!
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Garrett McGuire
            </Heading>
            <p>Software engineer & Cyber-security Enthusiast</p>
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
        </Container>
        </Layout>
    )
} 

export default Page
