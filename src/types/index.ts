


export type ILoginUser = {
    email: String;
    password: String
}

export type ICreateUser = {

    name: string;
    email: string;
    username: string;
    password: string;
    birthday: string;
}

export type IChangePassword = {
    password: string;
    repeatPassword: String
}

