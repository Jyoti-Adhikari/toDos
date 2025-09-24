import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [{
        id: 1,
        title: "Sample To Do",
        completed: false,
    }],
    addToDo: (title) => {},
    updatedToDo: (id, title) => {},
    toggleToDo: (id) => {},
    deleteToDo: (id) => {}
});
   
export const useToDoContext = () => { 
   return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;

