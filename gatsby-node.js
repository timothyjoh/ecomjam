const products = require('./data/products')

const slugify = (product) => {
  return product.sku
}

export const createSchemaCustomization = ({ actions }) => {
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

export const sourceNodes = async ({
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
