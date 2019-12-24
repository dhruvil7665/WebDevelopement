//service.js has the core functions that perform operations on the database according to the HTTP request
'use strict';
const mongoose = require('mongoose'), //importing mongoose
    Todo = mongoose.model('todoApp'); //

//searches the to-do passed in the params in the database
exports.search = function (params) {
    const promise = Todo.find(params).exec();
    return promise;
};

//stores the to-do passed in the post request in the database
exports.save = function (todo) {
    const newTodo = new Todo(todo);
    const promise = newTodo.save();
    return promise;
};



//updates the selected to-do
exports.update = function (todo) {
    todo.modified_date = new Date();
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};

//deleted the to-do that is passed in the delete http request
exports.delete = function (todoId) {
    const promise = Todo.remove({_id: todoId});
    return promise;
};
