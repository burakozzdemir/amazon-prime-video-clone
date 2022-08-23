import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept: "application/json"
    },
    params: {
        api_key: "171a8e469c408a6aa0548fd624264972"
    }
})

export default instance
