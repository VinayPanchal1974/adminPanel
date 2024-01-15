import { Link, Outlet } from "react-router-dom"
import Header from "../Layout/Header/Header"
import Accordion from 'react-bootstrap/Accordion';


import './Dashboard.css'


const Dashboard = () => {
    return (
        <>
            <Header />

            <div className="dashboard ">

                <div className="div1">
                    <h1 className="dashh1"> Dashboard</h1>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>
                                <h4><Link className="dashlink" to="">Category</Link></h4>
                                <hr></hr>
                                <h4><Link className="dashlink" to="addcategory">Add Category</Link></h4>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sub Category</Accordion.Header>
                            <Accordion.Body>
                                <h4><Link className="dashlink" to="subcategory">Sub Category</Link></h4>
                                <hr></hr>
                                <h4><Link className="dashlink" to="addsubcategory">Add Sub Category</Link></h4>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Product</Accordion.Header>
                            <Accordion.Body>
                                <h4><Link className="dashlink" to="product">Product</Link></h4>
                                <hr></hr>
                                <h4><Link className="dashlink"  to="addproduct">Add Product</Link></h4>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                </div>
                <div className="div2" >
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Dashboard