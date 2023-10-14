import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState(null)
  const [age, setAge] = useState(0);

  const handleClick = () => {
    var cur_year = parseInt(new Date().getUTCFullYear())
    var cur_month = parseInt(new Date().getMonth());

    var year = parseInt(String(dob).split('-')[0]);
    var month = parseInt(String(dob).split('-')[1]);

    var diff = (cur_month - month) + ((cur_year - year) * 12)

    setAge(Math.floor(diff / 12));
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input onChange={(e) => setDob(e.target.value)} type="date" name="dob" id="dob" />
      <button onClick={handleClick}>Calculate Age</button>
      <h3>You are {age} years old</h3>
    </div>
  );
}

export default App;