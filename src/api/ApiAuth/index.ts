import clientAxios from "../../config/ClientAxios";
import { ICreateUser } from "../../types";

export const CreateAccount = async (newUser: ICreateUser) => {
    try {

        const { data } = await clientAxios.post("/register", {

            nombre: newUser.name,
            email: newUser.email,
            password: newUser.password
        });

        return data;

    } catch (error) {

    }
}

export const ConfirmUser = async (token: String) => {
    try {
        const { data } = await clientAxios.patch(`/confirm/${token}`);
        return data;
    } catch (error) {
    }
}