import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context.jsx'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components/index.jsx'

const CartPage = () => {
  return <h4>cart page</h4>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
