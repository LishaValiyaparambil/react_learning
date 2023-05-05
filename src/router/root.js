import { Route, Routes } from "react-router-dom";
import  GetUsers  from '../hooks/user/userListing'
import  SignUp  from '../hooks/user/UserRegistration'
export default function RootRoute() {
    return (
        <Routes>
            <Route path='/users' element={< GetUsers/>} />
            <Route path='/' element={<SignUp />} />
        </Routes>
    )
}