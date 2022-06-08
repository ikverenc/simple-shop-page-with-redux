import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import Styles from "./sign-up-form.module.scss";

const FormInitialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(FormInitialValues);

    const { username, password, confirmPassword, email, mobile } = formFields;

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler} className={Styles.sign_up_form}>
            <div className={Styles.form_header}>
                <h1>Sign Up</h1>
            </div>
            <div className={Styles.form_input_container}>
                <FormInput
                    placeholder="Username"
                    inputIcon="fa-solid fa-user"
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChangeHandler}
                    required
                />
                <FormInput
                    placeholder="Email"
                    inputIcon="fa-solid fa-at"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    required
                />
                <FormInput
                    placeholder="Password"
                    inputIcon="fa-solid fa-key"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangeHandler}
                    required
                />
                <FormInput
                    placeholder="Confirm Password"
                    inputIcon="fa-solid fa-key"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChangeHandler}
                    required
                />
                <FormInput
                    placeholder="Mobile Phone"
                    inputIcon="fa-solid fa-phone"
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={onChangeHandler}
                    required
                />
            </div>
            <div>
                <button type="submit" className={Styles.sign_up_button}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;
