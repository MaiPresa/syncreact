import "./Button.scss";

export const Button = (props) => {
    return(
        <button className={props.buttonType} >
            {props.children}
        </button>
    );
};