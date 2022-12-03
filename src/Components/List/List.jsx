import React from "react";
import PropTypes from 'prop-types';

import RenderFlow from "../../Flows/RenderFlow/RenderFlow";

import "./List.css";

const List = ({ todos }) => {
    return (
        <div className="list-area">
            {todos.map((todo) => new RenderFlow(todo).start())}
        </div>
    )
}

export default List;

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string),
}