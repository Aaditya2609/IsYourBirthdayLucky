import { useState } from "react";
import "./styles.css";

export default function App() {
  var [dob, setdob] = useState("");
  var [lno, setlno] = useState("");
  var [output, setoutput] = useState("");

  function button() {
    var DOB = convertDobToNumber(dob);
    if (DOB) {
      if (lno) {
        alert("Privacy Notice: We are not storing data.");
        var sum = 0;
        while (DOB > 10) {
          sum = Math.trunc(sum + (DOB % 10));
          DOB = DOB / 10;
        }
        sum = Math.trunc(sum + DOB);
        if (sum % lno === 0) {
          setoutput("Your Birthday Is Lucky!!🥳🥳");
        } else setoutput("Your Birthday Is Not Lucky🙂🙂");
      } else setoutput("Enter Your Lucky Number!!!");
    } else setoutput("Enter Date Of Birth And Your Lucky Number!!!");
  }

  function convertDobToNumber(dob) {
    var dateOfBirth = dob.replaceAll("-", "");
    return dateOfBirth;
  }

  function DobChangeHandler(event) {
    setdob(event.target.value);
  }
  function lnoChangeHandler(event) {
    setlno(event.target.value);
  }

  return (
    <div className="App">
      <h1>Lucky Birthday</h1>
      <label id="dob">Date Of Birth</label>
      <input type="date" id="inputdob" onChange={DobChangeHandler}></input>
      <label id="luckyNumber">Lucky Number</label>
      <input id="inputLuckyNumber" onChange={lnoChangeHandler}></input>
      <button id="button" onClick={button}>
        Check Birthday
      </button>
      <p id="output">{output}</p>
    </div>
  );
}
