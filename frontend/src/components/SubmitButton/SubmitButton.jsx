
import "./SubmitButton.css"

export function SubmitButton(props) {
    return (
        <button className="submit-btn" type="submit" value={props.value}>
            {props.value}
        </button>
    )
}