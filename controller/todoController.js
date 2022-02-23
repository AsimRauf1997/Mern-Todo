const Todo = require('../models/tasks')
const getTodos = async (req,res)=>{
   const todo = await Todo.find()
    if(!todo){
       return res.status(404).json({error:'No Todo Found'})
    }
    res.status(200).json(todo)
}
const setTodos = async (req,res)=>{
    if(!req.body.title){
        return  res.status(400).json({error:'Please Add Text Title'})
    }
    const todo = await Todo.create({
        title:req.body.title,
        description:req.body.description 
    })  
     await todo.save()
    await res.json(todo)
}
const updateTodo = async (req,res)=>{
    const {title, description} = req.body
   const todo = await Todo.findById(req.params.id)
   if(!todo){
       res.status(400).json({error:'No Todo Found'})
   } 
    const updatedTodo = await Todo.findOneAndUpdate({_id:req.params.id},{title, description}, {new:true}).exec()
    res.json(updateTodo)
}
const deleteTodo = async (req,res)=>{
    const todo = await Todo.findById(req.params.id)
   if(!todo){
      return res.status(400).json({error:'No Todo Found'})
   }
   await Todo.deleteOne({_id:req.params.id}) 
   res.status(200).json({id:req.params.id})
}

module.exports = {
    getTodos,
    setTodos,
    updateTodo,
    deleteTodo,
}