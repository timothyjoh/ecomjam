import React from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode
} from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Heading as="h1">Chokers</Heading>
        <Grid columns={[1, 2, 3]} gap={20}>
          <Card>
            <Heading>A very fine boi</Heading>
            <Box>
              <Image
                src="https://i.redd.it/vryriaqo5wt41.jpg"
                style={{ backgroundSize: 'cover' }}
              />
            </Box>
          </Card>
          <Card>
            <Heading>He Ch0nk</Heading>
            <Box>
              <Image
                src="https://images-cdn.9gag.com/photo/aR7g6M7_700b.jpg"
                style={{ backgroundSize: 'contain' }}
              />
            </Box>
            <Text variant="text.caps">FEAST UR EYEBALLZ</Text>
          </Card>
          <Card>
            <Heading>One Heckin Ch0nker</Heading>
            <Box>
              <Image
                src="https://i.redd.it/bdcgvw2vk7m31.jpg"
                style={{ backgroundSize: 'contain' }}
              />
            </Box>
          </Card>
          <Card>
            <Heading>Hefty Ch0nk</Heading>
            <Box>
              <Image
                src="https://external-preview.redd.it/Rgi5xCTB_sN4cHofhuA6gKcJE6STOSXqCof5A6bAETw.png?width=960&crop=smart&auto=webp&s=509081f8f4be047b7c7bfb7e16e78e88bf94d92c"
                style={{ backgroundSize: 'contain' }}
              />
            </Box>
          </Card>
          <Card>
            <Heading>Mega-Ch0nker</Heading>
            <Text>Lorem ITextsum</Text>
          </Card>
          <Card>
            <Heading>Oh Lawd He Comin</Heading>
            <Text>Lorem ITextsum</Text>
          </Card>
        </Grid>
        <Grid columns={[1, 2]}>
          <Button
            onClick={() => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
          >
            Toggle Dark Mode
          </Button>
        </Grid>
      </Container>
    </Layout>
  )
}
export default IndexPage
