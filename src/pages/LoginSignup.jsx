import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function LoginSignup() {
    const [isSignup, setIsSignup] = useState(false)
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const navigate = useNavigate()




    return (
        <div className="login-page">
            <nav>
                <NavLink to=".">Login</NavLink>
                <NavLink to="signup">Signup</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}