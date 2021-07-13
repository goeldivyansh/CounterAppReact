import React,{useState} from "react";
import "./style.css"

const App = () => {

  let [score, setScore] = useState(0)

  return (
	<div>
		<h1>Counter Application</h1>
      	<h3>Current Score : {score}</h3>
		<button onClick = { ()=>{setScore(score+1)} }>Increment</button>
		<button onClick = { ()=>{if(score > 0) setScore(score-1)} }>Decrement</button>
		<button onClick = { ()=>{setScore(0)} }>Reset</button>
    </div>
  )
}

export default App;
