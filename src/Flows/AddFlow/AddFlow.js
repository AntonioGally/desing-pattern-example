//Commands
import StartLoading from "./Commands/StartLoading";
import AddItem from "./Commands/AddItem";
import UpdateTodoList from "./Commands/UpdateTodoList";
import FinishLoading from "./Commands/FinishLoading";
export default class AddFlow {
    constructor (itemToAdd, todoList, setTodoList, setLoading) {
        this.itemToAdd = itemToAdd;
        this.todoList = todoList;
        this.setTodoList = setTodoList;
        this.setLoading = setLoading;
    }

    start() {
        new StartLoading(this.setLoading).execute();
        let newList = new AddItem(this.itemToAdd, this.todoList).execute();
        new UpdateTodoList(newList, this.setTodoList).execute();
        new FinishLoading(this.setLoading).execute();
    }
}