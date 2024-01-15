import { Link, useNavigate } from "react-router-dom"
import "./AddSubCategory.css"
import { useState } from "react"
import { addSubCategory } from "../../Api/Api"

const AddSubCategory = () => {

  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })

  }
  const handlesummit = async (event) => {
    event.preventDefault()
    const res = await addSubCategory(data)
    if (res.status === "success") {
      navigate("/dashboard/subcategory")

    }

  }




  return (
    <>
      <div className='addSubCategory'>
        <Link className='SubCategorybackButton' to="/dashboard/subcategory">Back</Link>
        <h1 className="addSubh1">Add Sub Category</h1>
        <form className='addSubCategoryForm' onSubmit={handlesummit}>
          <div className="inputGroup">
            <label>Name</label>
            <input type="text" name="name" placeholder="enter name" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Title</label>
            <input type="text" name="title" placeholder="enter title" onChange={handleChange}></input>
          </div>
          <button className="subCategorybutton" type="submit">Add Category</button>
        </form>
      </div>
    </>
  )
}


export default AddSubCategory