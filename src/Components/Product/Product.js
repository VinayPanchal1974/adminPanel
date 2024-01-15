import { Link } from "react-router-dom"
import "./Product.css"
import { useEffect, useState } from "react"
import { deleteProduct, getProduct } from "../../Api/Api"


const Product = () => {

    const [data, setData] = useState([])

    const productdata = async () => {
        const res = await getProduct()
        setData(res.data)
    }

    async function deletePro(id) {
        const res = await deleteProduct(id)
        productdata()

    }

    useEffect(() => {
        productdata()
    }, [])
    return (
        <>
            <div className="productTable">
                <Link className="productButton" to={"/dashboard/addproduct"}>+ Product</Link>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>price</th>
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
                                            <td>{ele.price}</td>
                                            <td>
                                                <button className='productActionButton' onClick={() => { deletePro(ele._id) }}>del</button>
                                                <Link to={`/dashboard/updateproduct/${ele._id}`}><button className='actionButton'>up</button></Link>
                                                <button className='productActionButton'>vi </button>

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

export default Product