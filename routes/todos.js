const express = require('express');
const router = express.Router();
const model = require('../models/index');

// Get TODO list 

router.get('/', (req, res) => {
    model.Todo.findAll({})
        .then((todos) => {
            res.json({
                error: false,
                data: todos,
            })
        })
        .catch((err) => {
            res.json({
                error: true,
                data: [],
                error: error,
            })
        })
});

// POST // TODO: 

router.post('/', (req, res) => {
    const {
        title,
        description
    } = req.body;
    
    model.Todo.create({
            title: title,
            description: description,
        })
        .then((todo) => {
            res.status(201).json({
                error: false,
                data: todo,
                message: 'New Todo has been created',
            })
        })
        .catch((err) => {
            res.json({
                error: true,
                data: [],
                message: error,
            })
        })
});

// update TODO

router.put('/:id', (req, res) => {
    const todo_id = req.params.id;
    const {
        title,
        description
    } = req.body;
    
    model.Todo.update({
            title: title,
            description: description,
        }, {
            where: {
                id: todo_id,
            }
        })
        .then((todo) => {
            res.json({
                error: false,
                message: 'Todo task has been updated',
            })
        })
        .catch((err) => {
            res.json({
                error: true,
                messsage: err,
            })
        })
});

// Delete // TODO: 

router.delete('/:id', (req, res) => {
    const todo_id = req.params.id;

    model.Todo.destroy({
        where : {
            id : todo_id,
        }
    })
    .then((todo) => {
        res.json({
            error : false, 
            message : 'Todo is deleted successfully.',
            data : todo,
        })
    })
    .catch((err) => {
        res.json({
            error : true,
            message : 'Todo cannot be deleted',
        })
    })
});

module.exports = router;
