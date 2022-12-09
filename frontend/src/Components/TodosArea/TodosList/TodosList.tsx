import "./TodosList.css";
import TodoCard from "../TodoCard/TodoCard";
import { useEffect, useState } from "react";
import TodoModel from "../../../Models/TodoModel";
import todosService from "../../../Services/TodosService";
import { NavLink } from "react-router-dom";

function TodosList(): JSX.Element {

    const [todos, setTodos] = useState<TodoModel[]>([])
    
    useEffect(() =>{
        todosService.fetchAllTodos()
            .then(todosFromBackend => setTodos(todosFromBackend))
            .catch(err => alert(err.message))
        console.log('todos:' + todos)
    },[])

    return (
        <div className="TodosList">
            <section className="">
            <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card rounded-3">
                    <div className="card-body p-4">

                        <h4 className="text-center my-3 pb-3">To Do App</h4>

                        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="form-outline">
                            <input type="text" id="form1" className="form-control" />
                            <label className="form-label" >Enter a task here</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-warning">Get tasks</button>
                        </div>
                        </form>

                        <table className="table mb-4">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">content</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {todos &&
                        <tbody>
                        {todos.map(p => <TodoCard key={p.id} todo={p}/>)}
                        </tbody>
                        }
                        </table>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <NavLink className="btn btn-info" to={"/todos/new"}>➕</NavLink> */}
        </div>
    );
}

export default TodosList;
