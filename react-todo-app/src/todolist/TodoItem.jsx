/* eslint-disable react/prop-types */
import { useState } from "react"
import DeleteIcon from "../assets/deleteicon.png"
import Tickicon from "../assets/tickicon1.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo }) => {

  const [color,setcolor] = useState("white")

  function changeColor() {
    if (color==="white") {
      setcolor("#024b88")
    }
    else{
      setcolor("white")
    }
  }

  return (
    <div className="todo-item" id="todo-1">
      <img className="tick-icon" src={Tickicon} onClick={changeColor} style={{backgroundColor : color}}/>
      <p className="todo-task-title">{title}</p>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      
    </div>
  )
}