import React from 'react'
import { Container, Heading } from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading as="h1">Very Fine Bois</Heading>
    </Container>
  </Layout>
)

export default IndexPage
