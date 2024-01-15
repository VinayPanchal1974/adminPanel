
import React, { useEffect, useState } from 'react'

import "./Category.css"
import { Link } from 'react-router-dom'
import { deleteCategory, getCategory } from '../../Api/Api'


const Category = () => {

    const [data, setData] = useState([])

    const categorydata = async () => {
        const res = await getCategory()
        setData(res.data)

    }

    async function del(id) {
        const res = await deleteCategory(id)
        console.log(res)
        categorydata()
    }

    useEffect(() => {
        categorydata()
    }, [])

    return (
        <>
            <div className="userTable">
                <Link className="addButton" to={"addcategory"}>+ Add Category</Link>
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
                                            <td>{ele._id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.title}</td>
                                            <td>
                                                <button className='actionButton' onClick={() => { del(ele._id) }}>del</button>
                                                <Link to={`updatecategory/${ele._id}`}><button className='actionButton'>up</button></Link>
                                                <button className='actionButton'>vi </button>
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

export default Category