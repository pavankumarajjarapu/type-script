import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let a: number = 40;
  let b: number = 70;
  let sumOf = () => {
    console.log(a + b);
  };
  sumOf();
  let total = (engMarks: number, telMarks: number) => {
    console.log(`${engMarks + telMarks}`);
  };
  total(60, 80);

  interface PersonDetails {
    name: string;
    age: number;
    job: string;
  }

  // Create an object based on the interface
  let person: PersonDetails = {
    name: "Jane Doe",
    age: 28,
    job: "Graphic Designer",
  };

  // Log the object to the console
  console.log(person);

  return <div className="App"></div>;
 
}

export default App;
