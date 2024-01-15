import React, { useState } from 'react'
import "./AddCategory.css"
import { Link, useNavigate } from 'react-router-dom'
import { addCategory } from '../../Api/Api'

const AddCategory = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })

  }

  const handlesummit = async (event) => {
    event.preventDefault()
    const res = await addCategory(data)
    if (res.status === "success") {
      navigate("/dashboard")

    }
  }

  return (
    <>

      <div className='addCategory'>
        <Link className='backButton' to="/dashboard">Back</Link>
        <h1 className="addh1">Add Category</h1>
        <form className='addCategoryForm' onSubmit={handlesummit}>
          <div className="inputGroup">
            <label>Name</label>
            <input type="text" name="name" placeholder="enter name" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Title</label>
            <input type="text" name="title" placeholder="enter title" onChange={handleChange}></input>
          </div>
          <button className="button" type="submit">Add Category</button>
        </form>
      </div>

    </>
  )
}

export default AddCategory