import "./Icons.scss";

export const Icons = (props) => {
    return(
        <li>
            <div className={`icons ${props.iconType}`}>
                {props.children}
            </div>
            <p>{props.text}</p>
        </li>
    )
}