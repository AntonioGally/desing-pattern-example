//Commands
import StartLoading from "./Commands/StartLoading";
import RemoveItem from "./Commands/RemoveItem";
import UpdateTodoList from "./Commands/UpdateTodoList";
import FinishLoading from "./Commands/FinishLoading";
export default class RemoveFlow {
    constructor (itemToRemove, todoList, setTodoList, setLoading) {
        this.itemToRemove = itemToRemove;
        this.todoList = todoList;
        this.setTodoList = setTodoList;
        this.setLoading = setLoading;
    }

    start() {
        new StartLoading(this.setLoading).execute();
        let newList = new RemoveItem(this.itemToRemove, this.todoList).execute();
        new UpdateTodoList(newList, this.setTodoList).execute();
        new FinishLoading(this.setLoading).execute();
    }
}