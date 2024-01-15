import React, { useEffect, useState } from 'react'
import "./UpdateCategory.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { singleCategory, updateCategory } from '../../Api/Api'

const UpdateCategory = () => {

    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const single = async () => {
        const res = await singleCategory(id)
        setData(res.data)
    }

    useEffect(() => {
        single()
    }, [])

    const handleSummit = async (event) => {
        event.preventDefault()
        const res = await updateCategory(id, data)
        if (res.status === "success") {
            navigate("/dashboard")
        }
     }

    return (
        <>

            <div className='updateCategory'>
                <Link className='backButton' to="/dashboard">Back</Link>
                <h1 className="updateh1">Update Category</h1>
                <form className='updateCategoryForm' onSubmit={handleSummit}>
                    <div className="inputGroup">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="enter name" onChange={handleChange} value={data.name}></input>
                    </div>
                    <div className="inputGroup">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="enter title" onChange={handleChange} value={data.title}></input>
                    </div>
                    <button className="button" type="submit">Add Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateCategory