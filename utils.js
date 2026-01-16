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

export const getBooks = async()=>{
    const response = await axios.get(baseUrl)
    return response
}

export const readBooks = async(setBooks)=>{
    const response = await axios.get(baseUrl)
    setBooks(response.data)
    return response
}

export const createBook=async(newBook)=>{
    console.log(newBook);
    const response = await axios.post(baseUrl, newBook)
    return response.data
}