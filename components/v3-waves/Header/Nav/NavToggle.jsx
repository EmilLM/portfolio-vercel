
export default function NavToggle(props) {
    return (
        <div id="burger" className={props.class ? " active ": "d-md-none "}  onClick={props.onToggle} >
            <button type="button" className="burger-button" title="Menu" >
                <span className="burger-bar burger-bar--1"> </span>
                <span className="burger-bar burger-bar--2"> </span>
                <span className="burger-bar burger-bar--3"> </span>
            </button>
        </div>
    )
}