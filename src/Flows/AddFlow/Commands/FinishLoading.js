export default class FinishLoading {
    constructor (setLoading) {
        this.setLoading = setLoading;
    }

    execute() {
        this.setLoading(false);
    }
}