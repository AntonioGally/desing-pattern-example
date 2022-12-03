//Commands
import AddSpan from "./Commands/AddSpan";
import AddBreakLine from "./Commands/AddBreakLine"
import EncapsulateIntoDiv from "./Commands/EncapsulateIntoDiv";

export default class RenderFlow {
    constructor(todo) {
        this.todo = todo;
    }

    start() {
        let span = new AddSpan(this.todo).execute();
        let br = new AddBreakLine().execute();
        return new EncapsulateIntoDiv(span, br).execute();
    }
}