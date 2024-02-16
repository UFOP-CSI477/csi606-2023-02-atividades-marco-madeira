import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();

export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    }    
})
