import { API_BASE_URL } from "../Constant/Url"
import { ROUTE } from "../Routes/Routes"


export const SignupApi = async (bodydata) => {
    const res = await fetch(API_BASE_URL + ROUTE.Signup, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodydata)
    })
    return await res.json()
}



export const LoginApi = async (bodydata) => {
    const res = await fetch(API_BASE_URL + ROUTE.Login, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodydata)
    })
    return await res.json()
}



export const getCategory = async () => {
    const res = await fetch("http://localhost:9090/api/category", {
        method: "get",
        headers: {

            "Content-Type": "application/json",

        }
    })
    return res.json()
}


export const deleteCategory = async (i) => {
    const res = await fetch(`http://localhost:9090/api/category/${i}`, {
        method: "delete",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}



export const updateCategory = async (id, update) => {
    const res = await fetch(`http://localhost:9090/api/category/${id}`, {
        method: "put",
        headers: {
            "Content-type": "application/json",

        },
        body: JSON.stringify(update)

    })
    return res.json()
}


export const addCategory = async (bodydata) => {
    const res = await fetch("http://localhost:9090/api/category", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodydata)
    })
    return await res.json()
}



export const singleCategory = async (i) => {
    const res = await fetch(`http://localhost:9090/api/category/${i}`, {
        method: "get",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}




export const getSubCategory = async () => {
    const res = await fetch("http://localhost:9090/api/subcategory", {
        method: "get",
        headers: {

            "Content-Type": "application/json",

        }
    })
    return res.json()
}


export const deleteSubCategory = async (i) => {
    const res = await fetch(`http://localhost:9090/api/subcategory/${i}`, {
        method: "delete",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}


export const addSubCategory = async (bodydata) => {
    const res = await fetch("http://localhost:9090/api/subcategory", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodydata)
    })
    return await res.json()
}



export const singleSubCategory = async (i) => {
    const res = await fetch(`http://localhost:9090/api/subcategory/${i}`, {
        method: "get",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}


export const updateSubCategory = async (id, update) => {
    const res = await fetch(`http://localhost:9090/api/subcategory/${id}`, {
        method: "put",
        headers: {
            "Content-type": "application/json",

        },
        body: JSON.stringify(update)

    })
    return res.json()
}




export const getProduct = async () => {
    const res = await fetch("http://localhost:9090/api/product", {
        method: "get",
        headers: {

            "Content-Type": "application/json",

        }
    })
    return res.json()
}


export const deleteProduct = async (i) => {
    const res = await fetch(`http://localhost:9090/api/product/${i}`, {
        method: "delete",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}


export const singleProduct = async (i) => {
    const res = await fetch(`http://localhost:9090/api/product/${i}`, {
        method: "get",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}



export const updateProduct = async (id, update) => {
    const res = await fetch(`http://localhost:9090/api/product/${id}`, {
        method: "put",
        headers: {
            "Content-type": "application/json",

        },
        body: JSON.stringify(update)

    })
    return res.json()
}



export const addProduct = async (bodydata) => {
    const res = await fetch("http://localhost:9090/api/product", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodydata)
    })
    return await res.json()
}