import React from "react";
//IMPORT COMPONENTS
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <React.Fragment>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id}
                            todo={todo}
                            text={todo.text}
                        />
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};
export default TodoList;