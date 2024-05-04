import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;


const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/OnContigo-upc/api',
    headers: { 'Content-type': 'application/json' }
});

export default http;