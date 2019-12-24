
'use strict';
//import to-do service.
const todoService = require('../services/todo-service');
//import mongoose library
const mongoose = require('mongoose');

//exports the list function which is called in other files
exports.list = function (request, response) {
    const resolve = (todos) => {
        response.status(200);
        response.json(todos);
    };
    todoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//exports the post function which is called in other files
exports.post = function (request, response) {
    const newTodo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//get to-do
//exports the get function which is called in other files
exports.get = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.get(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//update to-do
//exports the update function which is called in other files
exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {


        response.status(200);
        response.json(todo);
    };
    todo._id = mongoose.Types.ObjectId(request.params.todoId);
    // console.log(request.params.stickyId);
    // console.log(sticky._id);

    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//delete a to-do
//exports the delete function which is called in other files
exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'To-Do Successfully deleted'
        });
    };
    todoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


//function that returns error to be printed on incorrect HTTP request
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                //error response given to the http request
                message: error.message
            });
        }
    }
    return errorCallback;
};