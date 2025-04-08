import axios from "axios";

const usersInstance = axios.create({
    baseURL: "https://67f404fccbef97f40d2d1671.mockapi.io/users"
});

export const getUsers = async ()=>{
    const {data} = await usersInstance.get('/');
    return data;
};

