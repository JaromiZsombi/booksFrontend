import axios from "axios";

const baseUrl="http://localhost:8000/books/"

export const getCategories=async()=>{
    const response = await axios.get(baseUrl+"categories")
    return response
}

export const getBooksByCateg=async({queryKey})=>{
    const response = await axios.get(baseUrl+"categ/"+queryKey[1])
    return response
}

export const getBooksBySearch=async({queryKey})=>{
    const response = await axios.get(baseUrl+"title/"+queryKey[1])
    return response
}