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
  ];

  return (
    <div className="App">
      {
        employeeInfo && employeeInfo.length> 0 &&
        (
      <header className="App-header">
        <h1>Company Directory</h1>
        {
        employeeInfo.map((employee)=>          
          {
            return <Employee key={employee.id} {...employee}/>
          })}        
        </header> 
        )
      }             
    </div>
  );
}

export default App;
