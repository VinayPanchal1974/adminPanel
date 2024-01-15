import { Link, useNavigate } from "react-router-dom"
import "./AddProduct.css"
import { useState } from "react"
import { addProduct } from "../../Api/Api"

const AddProduct = () => {

  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })

  }

  const handlesummit = async (event) => {
    event.preventDefault()
    const res = await addProduct(data)
    if (res.status === "success") {
      navigate("/dashboard/product")
    }
  }

  return (
    <>

      <div className='addProduct'>
        <Link className='productBackButton' to="/dashboard/product">Back</Link>
        <h1 className="addProducth1">Add Product</h1>
        <form className='addProductForm' onSubmit={handlesummit}>
          <div className="inputGroup">
            <label>Name</label>
            <input type="text" name="name" placeholder="enter name" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Price</label>
            <input type="text" name="price" placeholder="enter price" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Discount</label>
            <input type="text" name="discount" placeholder="enter discount" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Unit</label>
            <input type="text" name="unit" placeholder="enter unit" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Brand</label>
            <input type="text" name="brand" placeholder="enter brand" onChange={handleChange}></input>
          </div>
          <div className="inputGroup">
            <label>Description</label>
            <input type="text" name="description" placeholder="enter description" onChange={handleChange}></input>
          </div>
          <button className="productButton" type="submit">Add Category</button>
        </form>
      </div>
      </>
  )
}

export default AddProduct