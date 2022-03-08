import React from 'react'
import {Route,Link,Routes,Navigate} from 'react-router-dom'
import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/SignUp'


const Navigation = () => {
    return <Routes>
        <Route path='/' element={<Navigate replace to ='/login'/>} />
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path= '/signup' element={<SignUpScreen/>}/>
    </Routes>
}


export default Navigation