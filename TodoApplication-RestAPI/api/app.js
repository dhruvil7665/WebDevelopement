'use strict';
//exports all functions of app.js to be used on other files
module.exports = function (app) {
    //Initialize models
    let todoModel = require('./models/todo');

    //Initialize routes
    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
};