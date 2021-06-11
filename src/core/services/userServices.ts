import axios from "axios";
import { IUser } from "../types";

const instance = axios.create({
    headers: { "Access-Control-Allow-Origin": "*" }
});
export const getUserList = async () => {
    let result = await instance.get<IUser[]>('http://localhost:9000/api/user');
    return result.data;
}
export const createUser = async (user: IUser) => {
    return await axios.post('http://localhost:9000/api/user/create', user);;
}
export const editUser = async (user: IUser) => {
    return await axios.post('http://localhost:9000/api/user/create', user);;
}
export const getUserById = async (id: number) => {
    let result = await axios.get<IUser>(`http://localhost:9000/api/user/${id}`);
    return result.data;
}