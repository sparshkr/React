import "./App.css";
import Employee from "./components/Employee";

function App() {
  console.log("List of Employees");
  const showEmployee = 1;
  return (
    <div className="App">
      {console.log('Inside the return')}
      {showEmployee ? (
        <p>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </p>
      ) : (
        <p>You cannot view the Employees</p>
      )}
    </div>
  );
}

export default App;
