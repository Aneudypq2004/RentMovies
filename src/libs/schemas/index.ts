import * as yup from 'yup';

// ================ CREATE A NEW ACOUNT

export const newAccountSchema = yup.object().shape({
    name: yup.string()
        .required("The name is required"),

    lastName: yup.string()
        .required("The last name is required"),

    email: yup.string()
        .email("The email is not valid")
        .required("The email is required"),

    password: yup.string()
        .min(6, "The password must have at least 6 characters")
        .required("The password is required"),

    repeatPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),

    UserName: yup.string()
        .required("The username is required"),

    birthdayDate: yup.string()
        .required("The birthday date is required")
});

// ===== SIGN IN ======

export const SignInSchema = yup.object().shape({

    email: yup.string()
        .email("The email is not valid")
        .required("The email is required"),

    password: yup.string()
        .min(6, "The password must have 6 characters")
        .required("The password is required")

});

// ====== FORGOT PASSWORD ===== 

export const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().email("The email is not valid").required("The email is required")
});

// ====== CHANGE PASSWORD

export const ChangePasswordSchema = yup.object().shape({
    password: yup.string()
        .min(6, "The password must have at least 6 characters")
        .required("The password is required"),

    repeatPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password')
});