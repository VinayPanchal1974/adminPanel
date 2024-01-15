import { Link, useNavigate, useParams } from "react-router-dom"
import "./UpdateProduct.css"
import { useEffect, useState } from "react"
import { singleProduct, updateProduct } from "../../Api/Api"


const UpdateProduct = () => {


  const [data, setData] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const singlePro = async () => {
    const res = await singleProduct(id)
    setData(res.data)
    console.log(setData(res.data))
  }

  useEffect(() => {
    singlePro()
  }, [])

  const handleSummit = async (event) => {
    event.preventDefault()
    const res = await updateProduct(id, data)
    if (res.status === "success") {
      navigate("/dashboard/product")
    }

  }


  return (
    <>
      <div className='updateProduct'>
        <Link className='productBackButton' to="/dashboard/product">Back</Link>
        <h1 className="updateProducth1">Update Product</h1>
        <form className='updateProductForm ' onSubmit={handleSummit}>
          <div className="inputGroup">
            <label>Name</label>
            <input type="text" name="name" placeholder="enter name" onChange={handleChange} value={data.name}></input>
          </div>
          <div className="inputGroup">
            <label>Price</label>
            <input type="text" name="price" placeholder="enter price" onChange={handleChange} value={data.price}></input>
          </div>
          <div className="inputGroup">
            <label>Discount</label>
            <input type="text" name="discount" placeholder="enter discount" onChange={handleChange} value={data.discount}></input>
          </div>
          <div className="inputGroup">
            <label>Unit</label>
            <input type="text" name="unit" placeholder="enter unit" onChange={handleChange} value={data.unit}></input>
          </div>
          <div className="inputGroup">
            <label>Brand</label>
            <input type="text" name="brand" placeholder="enter brand" onChange={handleChange} value={data.brand}></input>
          </div>
          <div className="inputGroup">
            <label>Description</label>
            <input type="text" name="description" placeholder="enter description" onChange={handleChange} value={data.description}></input>
          </div>
          <button className="productButton" type="submit">Add Category</button>
        </form>
      </div>

    </>
  )

}

export default UpdateProduct