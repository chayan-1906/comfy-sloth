import {Navigate, Route} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
import {useUserContext} from '../context/user_context.jsx'

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth0()
    return user ? children : <Navigate replace to="/"/>
}

export default PrivateRoute
