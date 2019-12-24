

'use strict';
module.exports = function (app) {
    const todoController = require('../controllers/todo-controller.js');
    // TO-DO Routes for search and create.
    app.route('/todoApp')
        .get(todoController.list)
        .post(todoController.post);

    // TO-DO Routes for get, update and delete.
    app.route('/todoApp/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);
};