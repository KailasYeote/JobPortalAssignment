import api from "../utils/axios";

export const loginUser = async (userData) => {
    const res = await api.post("login", userData);
    return res.data;
}

export const registerUser = async (userData) => {
    const res = await api.post("register", userData);
    return res.data;
}

export const getUser = async () => {
    const res = await api.get("getuser");
    return res.data;
}



export default { loginUser, registerUser, getUser }