import config from "../../../Utils/Config";
import TodoModel from "../../../Models/TodoModel";
import "./TodoCard.css";
import { NavLink } from "react-router-dom";

interface TodoCardProps {
	todo: TodoModel;
}

function TodoCard(props: TodoCardProps): JSX.Element {
    return (
            <tr className="TodoCard">
                <th scope="row">{props.todo.id}</th>
                <td>{props.todo.title}</td>
                <td>{props.todo.content}</td>
                <td>
                <button type="submit" className="btn btn-danger">Delete</button>
                <button type="submit" className="btn btn-success ms-1">Finished</button>
                </td>
            </tr>
    );
}

export default TodoCard;
