import axios from "axios";

const API_INSTANCE = axios.create({
	baseURL: "https://threeocalc.onrender.com/api",
});

export { API_INSTANCE };
