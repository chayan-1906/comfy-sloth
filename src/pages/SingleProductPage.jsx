import React, {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useProductsContext} from '../context/products_context.jsx'
import {single_product_url as url} from '../utils/constants.jsx'
import {formatPrice} from '../utils/helpers.jsx'
import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars,
    PageHero,
} from '../components/index.jsx'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SingleProductPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {
        single_product_loading: loading,
        single_product_error: error,
        single_product: product,
        fetchSingleProduct,
    } = useProductsContext()

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate(-1)
            }, 3000)
        }
    }, [error])

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    // Video #312 1:48

    return <h4>single product page</h4>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--clr-primary-5);
  }

  .desc {
    line-height: 2;
    max-width: 45em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage