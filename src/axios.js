import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5002/clone-dd7e2/us-central1/api' //API URL
})

export default instance;