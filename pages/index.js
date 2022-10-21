import { Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Atlanta!
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Garrett McGuire
            </Heading>
            <p>Digital Craftsman ( Software and Security Engineer )</p>
            </Box>   
            </Box>
        </Container>
    )
} 

export default Page
