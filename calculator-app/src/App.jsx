import { useState } from 'react'
import './App.css'

function App() {
  const [display,setdisplay]=useState("")

  const [history,sethistory]=useState("")
  
  const buttonClick = (event) =>{
    setdisplay(display + (event.target.value))
  }

  const result = () =>{
    setdisplay(eval(display))
    sethistory(display)
  }

  const Clear = () =>{
    setdisplay("");
    sethistory("");
  }

  return (
    <>
    <div className="container">
        <h3 className="heading">Calculator</h3>
        <hr className="line-1"/>
        <input disabled className="display" value={history} type="text" placeholder=""/>
        <input disabled className="display" value={display} type="text" placeholder="0"/>
        <hr className="line-2"/>
        <div className="btns">
            <button value={7} onClick={buttonClick}>7</button>
            <button value={8} onClick={buttonClick}>8</button>
            <button value={9} onClick={buttonClick}>9</button>
            <button className='operator' value={"/"} onClick={buttonClick}>/</button>
            <button value={4} onClick={buttonClick}>4</button>
            <button value={5} onClick={buttonClick}>5</button>
            <button value={6} onClick={buttonClick}>6</button>
            <button className='operator' value={"*"} onClick={buttonClick}>*</button>
            <button value={1} onClick={buttonClick}>1</button>
            <button value={2} onClick={buttonClick}>2</button>
            <button value={3} onClick={buttonClick}>3</button>
            <button className='operator' value={"+"} onClick={buttonClick}>+</button>
            <button className='operator' value={"."} onClick={buttonClick}>.</button>
            <button value={0} onClick={buttonClick}>0</button>
            <button className='equal' value={"="} onClick={result}>=</button>
            <button className='operator' value={"-"} onClick={buttonClick}>-</button>
        </div>
        <button className="clr-btn" onClick={Clear}>Clear</button>
        <footer>Developed By: Salman Younas</footer>
    </div>
  </>
  )
}

export default App
