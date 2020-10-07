import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Product from '../components/product'

export const query = graphql`
  query($slug: String!) {
    product(slug: { eq: $slug }) {
      slug
      description
      name
      sku
      id
      price
      currency
    }
  }
`

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <Product product={data.product}></Product>
    </Layout>
  )
}

export default ProductTemplate
