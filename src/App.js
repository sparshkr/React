
import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role,setRole] = useState('dev');
  
  console.log("List of Employees");
  const showEmployee = true;
  return (
    <div className="App">
      {console.log('Inside the return')}
      {showEmployee ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }} />
        <p>
          <Employee name="Sparsh" role="Intern"/>
          <Employee name="Abby" role={role}/>
          <Employee name="Caleb" role="SDE"/>
          
        </p>
        </>
      ) : (
        <p>You cannot view the Employees</p>
      )}
    </div>
  );
}

export default App;
