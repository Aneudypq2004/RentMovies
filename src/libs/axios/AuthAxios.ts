import axios from "axios";

const token = localStorage.getItem("TokenClient") ?? "";

const ClientAuthAxios = axios.create({

    baseURL: import.meta.env.VITE_BACKURL,

    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
});

export default ClientAuthAxios;
