import React from "react";

export default class EncapsulateIntoDiv {
    constructor(span, br) {
        this.span = span;
        this.br = br;
    }

    execute() {
        return React.createElement("div", null, this.span, this.br);
    }
}