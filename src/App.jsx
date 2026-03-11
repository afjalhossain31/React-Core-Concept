import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Core Concepts</h1>
      <Person></Person>
      <Player name="Tamin " runs="5000"></Player>
      <Subject></Subject>
      <Sports></Sports>
      <Student></Student>
      <Developer name="Afjal" tech="JavaScript"></Developer>
      <Developer name="Samad" tech="Python"></Developer>
      <Developer name="Babu" tech="Java"></Developer>
      

    </>
  )
}

// const {name, tech} ={name: "Afjal", tech: "JavaScript"};
function Player({ name, runs }) {
  return (
    <div className='Subject'>
      <h3>Name : {name}</h3>
      <p>Runs : {runs}</p>
    </div>
  )
}
function Developer(props) {
  console.log(props);
  return (
    // Inline CSS style for the Developer component
    <div style={{
      border: '2px solid green'
    }}>
      <p>Developer: {props.name}</p>
      <p>Techonology: {props.tech}</p>
    </div>
  )
}


function Person() {
  const name = "Afjal Hossain";
  const age = 25;
  // Inline CSS style for the Person component
  const personStyle = {
    color: 'white',
    margin: '10px',
    padding: '10px',
    border: 'blue solid 2px',
    textAlign: 'left'

  }

  return (
    <div style={personStyle}>
      <h2>This is a {name} {age} years old.</h2>
      <p>This is a simple React component.</p>
    </div>
  )
}

function Subject() {
  const subject = "Computer Science";
  const teacher = "Afjal Hossain";
  return (
    <div className='Subject'>
      <h2>This is a {subject} subject.</h2>
      <p>This is taught by {teacher}.</p>
    </div>
  )
}

function Student() {
  return (
    <div className='Subject'>
      <p>Name: Afjal Hossain</p>
      <p>Department: Computer Science</p>
      <p>Year: 3rd Year</p>
      <p>This is a simple React component.</p>
    </div>
  )
}

function Sports() {
  const sport = "Football";
  const player = "Neymar Jr.";
  return (
    <div className='Subject'>
      <h2>This is a {sport} sport.</h2>
      <ul>
        <li>Football is a team sport played between two teams of eleven players each.</li>
        <li>It is the most popular sport in the world, with over 4 billion fans worldwide.</li>
      </ul>
      <p>This is played by {player}.</p>
    </div>
  )
}

export default App
