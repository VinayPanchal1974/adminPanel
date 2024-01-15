import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import { LoginApi } from "../Api/Api"


const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSummit = async (event) => {
        event.preventDefault()
        const res = await LoginApi(data)
        if (res.status === "success") {
            navigate("/dashboard")
        }

    }


    return (
        <>
            <div className="logindiv">
                <h1 className="h1">SIGN IN</h1>
                <form className="loginform" onSubmit={handleSummit
                }>
                    <div className="loginformdiv">
                        <label>Email</label>
                        <input type="email" value={data.email} name="email" placeholder="Enter Your Email" onChange={handleChange} />
                    </div>
                    <div className="loginformdiv">
                        <label>Password</label>
                        <input type="password" value={data.password} name="password" placeholder="Enter Your Password" onChange={handleChange} />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <h3 className="link" ><Link to={"/"}>Create a New Account</Link></h3>
            </div>

        </>
    )
}

export default Login