import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to={"/home"}>Home</NavLink><br />
            <NavLink to={"/todos"}>Todos</NavLink>
        </div>
    );
}

export default Menu;
