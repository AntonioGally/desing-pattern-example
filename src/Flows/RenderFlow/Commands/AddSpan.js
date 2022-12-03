import React from "react";

export default class AddSpan {
    constructor(text) {
        this.text = text;
    }

    execute() {
        return React.createElement("span", null, this.text);
    }
}