import * as yup from "yup";

export const loginFormValidation = yup.object().shape({
    username: yup
        .string()
        .required("User Name is required"),
    password: yup.string().required("Password is required"),
});

export const registerFormValidation = yup.object().shape({
    username: yup.string().required("User Name is required"),
    firstName: yup.string().required("First Name is required"),
    middleName: yup.string().required("Middle Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email address"),
    password: yup.string().required("Password is required"),
});