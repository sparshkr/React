import "./App.css";
import Employee from "./components/Employee";

function App() {
  console.log("List of Employees");
  const showEmployee = true;
  return (
    <div className="App">
      {console.log('Inside the return')}
      {showEmployee ? (
        <p>
          <Employee name="Sparsh" role="Intern"/>
          <Employee name="Abby" />
          <Employee name="Caleb" role="SDE"/>
          
        </p>
      ) : (
        <p>You cannot view the Employees</p>
      )}
    </div>
  );
}

export default App;
