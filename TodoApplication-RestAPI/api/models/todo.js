'use strict';
const mongoose = require('mongoose');
const todo = mongoose.Schema;

//defining the schema for mongoDB
let TodoSchema = new todo({


    /**
     * Title of the to-do.
     */
    title: {
        type: String,
        required: "title is required"
    },
    /**
     * to-do created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * to-do content.
     */
    content: {
        type: String
    },
    /**
     * Last modified date of the to-do.
     */
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
    editable: {
        type: Boolean,
        default: false
    },
    dueDate:{
        type:Date,
        default : Date.now()
    },
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true
});

//exporting everything using a module and creates a model when called by server.js
module.exports = mongoose.model('todoApp', TodoSchema);
