const { loadStripe } = require('@stripe/stripe-js')
const React = require('react')
const { CartProvider } = require('use-shopping-cart')

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

exports.wrapRootElement = ({ element }) => {
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
