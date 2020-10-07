import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      stripe={stripePromise}
      successUrl={`${process.env.URL || 'http://localhost:8000/success'}`}
      cancelUrl={process.env.URL || 'http://localhost:8000/cancelled'}
      allowedCountries={['US', 'CA', 'GB']}
      billingAddressCollection={false}
      mode={'checkout-session'}
    >
      {element}
    </CartProvider>
  )
}
