import "./App.css"; 
import Employee from "./Employee"

function App() {
  const employeeInfo= [
    {
      id:"1",
      firstName:"Smith",
      lastName:"William",
      role:"Programmer Analyst"      
    },
    {
      id:"2",
      firstName:"John",
      lastName:"Doe",
      role:"Developer"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {
          //Destructuring
        // employeeInfo.map(employee=>
        //   { const {firstName,lastName, role} = employee;
        // return(<Employee firstName={firstName} lastName={lastName} role={role}/>)
        // }
        // )}

        //Spreading 
        employeeInfo.map((employee)=>          
          {
            return <Employee key={employee.id} {...employee}/>
          })}

        {/* /* {
        <Employee firstName="Smith" lastName="William" role="Programmer Analyst"></Employee>
        <Employee firstName="John" lastName="Doe" role ="Developer"></Employee> 
        } */ }
              
      </header>
    </div>
  );
}

export default App;
