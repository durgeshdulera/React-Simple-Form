import './App.css';
import React, {useState} from 'react';
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList';

function App() {
  const key = 'employee-list'
  
 
  const list =  localStorage.getItem(key) == null ? [] : JSON.parse(localStorage.getItem(key));
  const [emplist,setList] = useState(list);
  const appendList = employee => setList((oldlist) => {
    const appended =[employee,...oldlist];
    localStorage.setItem(key,JSON.stringify(appended));
    return appended;
  })
  return (
    <div>
      <EmployeeForm SaveToEmployeeList= {appendList} />
      <div className="container" style={{marginTop:10}}>
      <EmployeeList employees={emplist}   />
      </div>
    </div>
  )
}
export default App;
