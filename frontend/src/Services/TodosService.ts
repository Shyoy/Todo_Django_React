import axios from "axios";
import TodoModel from "../Models/TodoModel";
import config from "../Utils/Config";

class TodosService {

    public async fetchAllTodos():Promise<TodoModel[]>
    {
        const response = await axios.get<TodoModel[]>(config.todosUrl);

        const todos = response.data;
        
        return todos

    }

    public async  fetchById(id: number):Promise<TodoModel>{
        const response = await axios.get<TodoModel>(config.todosUrl + id);

        const todo = response.data;

        return todo;
    }

    public async addTodo(todo: TodoModel):Promise<TodoModel>{
            const response = await axios.post<TodoModel>(config.todosUrl, todo);
            const addedTodo = response.data;

            return addedTodo;
    
    
    
    }





}

const todosService = new TodosService();
export default todosService

