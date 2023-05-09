import { Route, Routes } from "react-router-dom";
import  GetUsers  from '../componets/user/userListing'
import  SignUp  from '../componets/user/UserRegistration'
import FormDataDisplay from "../componets/user/propsMain";
export default function RootRoute() {
    return (
        <Routes>
            <Route path='/users' element={< GetUsers/>} />
            <Route path='/' element={<SignUp />} />
            <Route path='/forms' element={<FormDataDisplay />}/>
        </Routes>
    )
}