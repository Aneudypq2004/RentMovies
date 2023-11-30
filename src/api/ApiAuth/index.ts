import clientAxios from "../../libs/axios/ClientAxios";
import { IChangePassword, ICreateUser } from "../../types";

// ======= SIGN IN ==========

export const SignInApi = async (obj: {email: string, password: string}) => {
    try {
        const { data } = await clientAxios.post("/login", obj);
        return data;
    } catch (error) {
    }
}

// ===== CREATE ACCOUNT ======

export const CreateAccountApi = async (newUser: ICreateUser) => {
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
// Confirm User

export const ConfirmUserApi = async (token: String) => {
    try {
        const { data } = await clientAxios.patch(`/confirm/${token}`);
        return data;
    } catch (error) {
    }
}

// Change Password

export const ChangePasswordApi = async (obj: IChangePassword, token: string) => {
    try {
        const { data } = await clientAxios.patch(`/change-password/${token}`, obj);
        return data;
    } catch (error) {
    }
}

// FORGOT PASSWORD

export const ForgotPasswordApi = async (email: string) => {
    try {
        const { data } = await clientAxios.post("/forgot-password", email);
        return data;
    } catch (error) {
    }
}





