/* eslint-disable prettier/prettier */
const { StatusCodes } = require('http-status-codes');



// eslint-disable-next-line no-unused-vars
const User = require('../models/User')
const Todos = require('../models/Todos')
// eslint-disable-next-line no-unused-vars
const Tarefa = require('../models/Tarefas')

module.exports = {
  all: async (_, response) => {
    const list = await  Todos.findAll()
    response.json({list})
    response.sendStatus(StatusCodes.UNAUTHORIZED);
  },
  // eslint-disable-next-line no-unused-vars


  criarLista: async (request, response) =>{
    let titulo = request.body.titulo
    if(titulo != undefined){
        Todos.create({
                    titulo: titulo
                    
            }).then(()=>{
              response.sendStatus(StatusCodes.CREATED);
            })
    }else{
      response.json({error: 'Dados não enviados'})
    }
    
  
  },
  
  

  deletarLista:(request,response)=>{
    var id = request.id.params
    let todo = Todos.findByPk(id)
    if(todo){
         todo.destroy()
    }
    response.json({})
  }
 




};
