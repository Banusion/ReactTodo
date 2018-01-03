"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cx = require("classnames");
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoItem.prototype.render = function () {
        var todo = this.props.todo;
        return <li className={cx({ completed: todo.completed })}>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>{todo.title}</label>
                <button className="destroy"></button>
            </div>
        </li>;
    };
    return TodoItem;
}(React.Component));
exports.default = TodoItem;
