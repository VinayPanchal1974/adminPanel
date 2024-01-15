import { BrowserRouter as Router,Routes,Route, Outlet } from "react-router-dom"
import "./App.css"
import Dashboard from "./Components/Dashboard/Dashboard"
import Category from "./Components/Category/Category";
import AddCategory from "./Components/Category/AddCategory";
import UpdateCategory from "./Components/Category/UpdateCategory";
import SubCategory from "./Components/SubCategory/SubCategory";
import AddSubCategory from "./Components/SubCategory/AddSubCategory";
import UpdateSubCategory from "./Components/SubCategory/UpdateSubCategory";
import Product from "./Components/Product/Product";
import AddProduct from "./Components/Product/AddProduct";
import UpdateProduct from "./Components/Product/UpdateProduct";
import Signup from "./Auth/Signup"
import Login from "./Auth/Login";



const App=()=>{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<Category />} />
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="updatecategory/:id" element={<UpdateCategory />} />
          <Route path="subcategory" element={<SubCategory />} />
          <Route path="addsubcategory" element={<AddSubCategory />} />
          <Route path="updatesubcategory/:id" element={<UpdateSubCategory />} />
          <Route path="product" element={<Product />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} />
          </Route>
      
      </Routes>
    </Router>
    <Outlet />
  
   
    </>
  )
}

export default App