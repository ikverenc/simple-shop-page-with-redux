import Styles from "./form-input.module.scss";

const FormInput = ({ placeholder, inputIcon, ...otherProps }) => {
    return (
        <div className={Styles.form_input_group}>
            <i className={inputIcon}></i>
            <input placeholder={placeholder} {...otherProps} />
        </div>
    );
};

export default FormInput;
