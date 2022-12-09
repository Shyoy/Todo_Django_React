import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
// import AddTodo from "../../TodosArea/AddTodo/Addtodo";
import TodosList from "../../TodosArea/TodosList/TodosList";
import NotFound404 from "../NotFound404/NotFound404";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Suspense fallback={<h1>loading...</h1>}>
                
            <Routes>
                <Route path="/" element={<Navigate to={"/home"}/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/todos" element={<TodosList/>}></Route>
                {/* <Route path="/todos/new" element={<AddTodo/>}></Route> */}
                {/* <Route path="/product/detail/:id" element={<TodoDetails/>}></Route> */}
                <Route path="/*" element={<NotFound404/>}></Route>


            </Routes>
			</Suspense>
        </div>
    );
}

export default Routing;
