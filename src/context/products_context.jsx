import axios from 'axios'
import React, {useContext, useEffect, useReducer} from 'react'
import products_reducer from '../reducers/products_reducer.jsx'
import {products_url, products_url as url} from '../utils/constants.jsx'
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from '../Actions.jsx'

const initialState = {
    isSidebarOpen: true,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)

    const openSidebar = () => {
        dispatch({type: SIDEBAR_OPEN})
    }

    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE})
    }

    const fetchProducts = async (url) => {
        dispatch({type: GET_PRODUCTS_BEGIN})
        console.log('fetchProducts')
        try {
            const response = await axios.get(url)
            console.log(`41: ${response}`)
            const products = response.data
            dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
        } catch (error) {
            dispatch({type: GET_PRODUCTS_ERROR})
        }
    }

    const fetchSingleProduct = async (url) => {
        dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
        try {
            const response = await axios.get(url)
            const singleProduct = response.data
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
        } catch (e) {
            dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }
    }

    useEffect(() => {
        fetchProducts(url)
    }, [])

    return (
        <ProductsContext.Provider value={
            {
                ...state,
                openSidebar,
                closeSidebar,
                fetchSingleProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

// make sure use
export const useProductsContext = () => {
    return useContext(ProductsContext)
}
