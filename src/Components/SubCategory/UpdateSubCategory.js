import { Link, useNavigate, useParams } from "react-router-dom"
import "./UpdateSubCategory.css"
import { useEffect, useState } from "react"
import { singleSubCategory, updateSubCategory } from "../../Api/Api"

const UpdateSubCategory = () => {

   

    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate=useNavigate()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    }

    const singleSub = async () => {
        const res = await singleSubCategory(id)
        setData(res.data)

    }

    useEffect(() => {
        singleSub()
    }, [])

    const handleSummit = async(event) => {
        event.preventDefault()
        const res=await updateSubCategory(id,data)
        if(res.status==="success"){
            navigate("/dashboard/subcategory")
        }


    }




    return (
        <>
            <h1>update</h1>
            <div className='updateSubCategory'>
                <Link className='SubCategorybackButton' to="/dashboard/subcategory">Back</Link>
                <h1 className="updateSubh1">Update Sub Category</h1>
                <form className='updateSubCategoryForm' onSubmit={handleSummit}>
                    <div className="inputGroup">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="enter name" onChange={handleChange} value={data.name}></input>
                    </div>
                    <div className="inputGroup">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="enter title" onChange={handleChange} value={data.title}></input>
                    </div>
                    <button className="UpdateSubbutton" type="submit">Add Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateSubCategory