import React from 'react'
import { Card, Container, Grid, Heading, Text } from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading as="h1">Chokers</Heading>
      <Grid columns={[1, 2, 3]} gap={20}>
        <Card>
          <Heading>A very fine boi</Heading>
          <Text>Lorem ITextsum</Text>
        </Card>
        <Card>
          <Heading>One Heckin Ch0nker</Heading>
          <Text>Lorem ITextsum</Text>
        </Card>
        <Card>
          <Heading>Mega Ch0nker</Heading>
          <Text>Lorem ITextsum</Text>
        </Card>
      </Grid>
    </Container>
  </Layout>
)

export default IndexPage
