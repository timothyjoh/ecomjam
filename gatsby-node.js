const { products } = require('./data/products')

const slugify = (product) => {
  return product.sku
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type Product implements Node {
      name: String!
      sku: String!
      image: String
      price: Int
      slug: String
      id: String
      currency: String
      description: String
    }
  `

  createTypes(typeDefs)
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId
}) => {
  return products.map((product) => {
    const node = {
      ...product,
      slug: slugify(product),
      id: createNodeId(`Product-${product.sku}`),
      internal: {
        type: 'Product',
        contentDigest: createContentDigest(product)
      }
    }
    createNode(node)
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allProduct.edges.forEach(({ node }) => {
    createPage({
      path: `ch0nk/${node.slug}`,
      component: require.resolve('./src/templates/product.js'),
      context: {
        slug: node.slug
      }
    })
  })
}
