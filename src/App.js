import React, { useState } from "react";


export default function TodoApp(){
  const [addTodo,UpdateaddTodo]=useState()
  const [TodoData,UpdateTodoData]=useState([{
    id:1,
    title:"Reactjs"
  },
  {
    id:2,
    title:"Angular Js"
  }
  ])
  function deleteFun(id){
   let data=TodoData.filter((d)=>{
    return d.id!=id
   })
   console.log(data)
   UpdateTodoData(data)
  }
 function changeTodo(e){
  let up_data=e.target.value
  UpdateaddTodo(up_data)
  
 }
 
 function submitData(e){
  e.preventDefault()
  if(addTodo!=""){
    var data_id=Math.round(Math.random()*10)+2
  let sub_data={
    id:data_id,
    title:addTodo
  }
  UpdateTodoData([...TodoData,sub_data])
  UpdateaddTodo("")
  e.target[0].value=''
  }
  else{
    alert("Enter Data")
  }
 }
  return(
    <>
    <div className="container mt-5 w-50">
      <h1 className="text-center">Todo App Using React</h1>
    <form onSubmit={submitData}>
      <div className="input-group">
        <input type="text" name="inp" placeholder="Enter anything" onChange={changeTodo} className="form-control"/>
        <button type="submit" className="btn btn-primary">Add</button>
        
      </div>
      </form>
      <ul className="list-group mt-3">
        {
          TodoData.map(data=>
            <>
            <li className="list-group-item mt-2 d-flex justify-content-between align-items-center">
            <p>{data.title}</p>
            <button className="btn" onClick={()=>
            deleteFun(data.id)}>X</button>
          </li>
            </>
        )
        }
        </ul>
    </div>
    </>
  )
}