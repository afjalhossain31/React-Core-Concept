import { useState } from 'react'

import './App.css'
import Todo from './Todo'

function App() {
  const time = 40;

  return (
    <>
      <h1>Core Concepts</h1>

      <Todo
        task='Learn React'
        isDone={true} time={time}>
      </Todo>

      <Todo
        task='Build a Todo App'
        isDone={false}
        time={time}>
      </Todo>

      <Todo
        task='Master JavaScript'
        isDone={false}
        time={time}>
      </Todo>

      {/* <Person></Person>
      <Player name="Tamin " runs="5000"></Player>
      <Subject></Subject>
      <Sports></Sports>
      <Student></Student>
      <Developer name="Afjal" tech="JavaScript"></Developer>
      <Developer name="Samad" tech="Python"></Developer>
      <Developer name="Babu" tech="Java"></Developer>
      <Profile name="Afjal Hossain" age="25" city="Dhaka"></Profile>
      <User name="Afjal Hossain"></User>
      <User1 age={25}></User1>
      <User2 isLoggedIn={true}></User2>
      <User3 skills={["JavaScript", "React", "Node.js"]}></User3>
      <User4 user={{ name: "Afjal Hossain", age: 25 }}></User4> */}
    </>

  )
}
// 1 .String Prop
function User({ name }) {
  return (
    <p>Name: {name}</p>
  )
}
// 2. Number Prop
function User1({ age }) {
  return (
    <p>Age: {age}</p>
  )
}
// 3. Boolean Prop
function User2({ isLoggedIn }) {
  return (
    <div>
      <p>Is Logged In: {isLoggedIn ? "Yes" : "No"}</p>
    </div>

  )
}

// 4. Array Prop

function User3({ skills }) {
  return <p>{skills.join(", ")}</p>;
}

// 5. Object Prop
function User4({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
    </div>
  );
}

//Destructuring props in the Profile component
function Profile({ name, age, city }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
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
