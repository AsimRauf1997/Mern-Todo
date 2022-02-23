const express = require('express')
const {getTodos, setTodos, updateTodo, deleteTodo} = require('../controller/todoController')
const router = express.Router()
router.get('/',getTodos )
router.post('/',setTodos )
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)
module.exports = router