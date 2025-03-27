import axios from "axios";

const catInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search'
})

export const getCatImage = async()=>{
    const {data} = await catInstance.get('/')

    return data;
}