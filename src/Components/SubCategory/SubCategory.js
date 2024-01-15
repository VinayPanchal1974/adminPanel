import { Link } from "react-router-dom"
import "./SubCategory.css"
import { useEffect, useState } from "react"
import { deleteSubCategory, getSubCategory } from "../../Api/Api"


const SubCategory = () => {
    const [data, setData] = useState([])

    const subCategorydata = async () => {
        const res = await getSubCategory()
        setData(res.data)

    }

    async function subdel(id) {
        const res = await deleteSubCategory(id)
        // setData(res.data)
        subCategorydata()

    }

    useEffect(() => {
        subCategorydata()
    }, [])

    return (
        <>
            <div className="subCategoryTable">
                <Link className="addButton" to={"/dashboard/addsubcategory"}>+ Add Sub Category</Link>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((ele, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>3{ele._id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.title}</td>
                                            <td>
                                                <button className='subCategoryActionButton' onClick={() => { subdel(ele._id) }}>del</button>
                                                <Link to={`/dashboard/updatesubcategory/${ele._id}`}><button className='subCategoryActionButton'>up</button></Link>
                                                <button className='subCategoryActionButton'>vi </button>

                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default SubCategory
