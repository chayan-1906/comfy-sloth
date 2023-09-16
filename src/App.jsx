import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Footer, Navbar, Sidebar} from './components'
import {About, Cart, Checkout, Error, Home, PrivateRoute, SingleProduct} from './pages'
import ProductsPage from "./pages/ProductsPage.jsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Sidebar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/cart' exact element={<Cart/>}/>
                <Route path='/products' exact element={<ProductsPage/>}/>
                <Route path='/products/:id' exact element={<SingleProduct/>}/>
                <Route path='/checkout' element={<PrivateRoute element={<Checkout/>}/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App