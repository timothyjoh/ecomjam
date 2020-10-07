import React from 'react'
import { Box, Heading } from 'theme-ui'
import { useShoppingCart } from 'use-shopping-cart'

export const Product = ({ product }) => {
  const { id, slug, sku, name } = product
  const [cart, setCart] = useShoppingCart()

  return (
    <Box>
      <Heading use="h1">{name}</Heading>
    </Box>
  )
}

export default Product
