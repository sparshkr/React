import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Addemployee from "./components/Addemployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sparsh",
      role: "Intern",
      img: "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-at-computer.jpeg.jpg",
    },
    {
      id: 2,
      name: "Abby",
      role: "Intern",
      img: "https://pspdfkit.com/assets/images/blog/2017/women-in-software-development/rita-working-d49c61e5.jpg",
    },
    {
      id: 3,
      name: "caleb",
      role: "Intern",
      img: "https://www.usnews.com/dims4/USNEWS/af66e3c/2147483647/crop/2000x1313+0+0/resize/640x420/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Ff9%2Ff1%2Fa6174c87479b8222c09903d7651c%2F190219-softwaredevelopers-stock.jpg",
    },
  ]);

  function updateEmployee(id, setName, setRole) {
    // console.log("Inside updateEmployee");
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: setName, role: setRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
    console.log(employees);
    console.log(updatedEmployees);
  }

  function newEmployee(name,role,img){
    let NewEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };

    setEmployees([...employees,NewEmployee]); 
  }

  console.log("List of Employees");
  const showEmployee = true;
  return (
    <div className="App">
      {console.log("Inside the return")}
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <p className="flex flex-wrap justify-center mb-10">
            {employees.map((employee) => {
              return (
                <Employee
                  // key = {uuidv4()}
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  // role = {role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </p>

          <Addemployee newEmployee={newEmployee}/>
        </>
      ) : (
        <p>You cannot view the Employees</p>
      )}
    </div>
  );
}

export default App;
