import { Link, useNavigate } from "react-router-dom"
import "./signup.css"
import { useState } from "react"
import { SignupApi } from "../Api/Api"


const Signup = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSummit = async (event) => {
        event.preventDefault()
        const res = await SignupApi(data)
        console.log(res);
        if (res.status === "success") {
            navigate("/dashboard")
        }
    }

    return (
        <>
            <div className="signupdiv">
                <h1 className="h1">SIGN UP</h1>
                <form className="form" onSubmit={handleSummit}>
                    <div className="formdiv">
                        <label>Name</label>
                        <input type="text" value={data.name} name="name" placeholder="Enter Your Name" onChange={handleChange} />
                    </div>
                    <div className="formdiv">
                        <label>Email</label>
                        <input type="email" value={data.email} name="email" placeholder="Enter Your Email" onChange={handleChange} />
                    </div>
                    <div className="formdiv">
                        <label>Password</label>
                        <input type="password" value={data.password} name="password" placeholder="Enter Your Password" onChange={handleChange} />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <h3 className="link"><Link to={"/login"}>Already Account</Link></h3>
            </div>
        </>
    )
}

export default Signup