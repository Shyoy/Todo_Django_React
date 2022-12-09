import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isNumberObject } from "util/types";
import TodoModel from "../../../Models/TodoModel";
import todosService from "../../../Services/TodosService";
import "./AddTodo.css";

function AddTodo(): JSX.Element {
    const navigate = useNavigate();
    const { register ,handleSubmit, formState} = useForm<TodoModel>();

    async function send(todo: TodoModel){
        const newTodo = await todosService.addTodo(todo);
        navigate("/todos")
        console.log(todo);
    }


    return (
        <div className="AddTodo Box">
           <form onSubmit={handleSubmit(send)}>
                <h4>Add Todo</h4>
                {/* <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" {...register("name",{
                        required: {value:true ,message: "Please enter a name"},
                        minLength:{value:3,message: "Length must be greater than 3"},
                        maxLength:{value:20,message: "Name too long"},
                    })}/>
                <span>{formState.errors.name?.message}</span>
                    <label>Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" {...register("price",{
                        required: {value:true ,message: "Please enter a price"},
                        maxLength:{value:13,message: "price must be shorter"},                 
                    })}/>
                <span>{formState.errors.price?.message}</span>
                    <label>Price</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" {...register("stock",{
                        required: {value:true ,message: "Please enter a stock"},
                        // minLength:{value:1 ,message: "stock must be a number"},
                        maxLength:{value:13,message: "stock must be shorter"},
                    })}/>
                <span>{formState.errors.stock?.message}</span>
                    <label>stock</label>
                </div> */}


                <button className="btn btn-primary">Add</button>
            </form>
			
        </div>
    );
}

export default AddTodo;
