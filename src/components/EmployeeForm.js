import react,{useState} from "react";
const EmployeeForm = (props) => {



  const [firstNameInput,setfirstNameInput] = useState('form-control');
  const [lastNameInput,setlastNameInput] = useState('form-control');
  const [emailInput,setemailInput] = useState('form-control');
  const [mobileNoInput,setmobileNoInput] = useState('form-control');

  const [firstName,setFirstName] = useState('');
  const [lastName,setlastName] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');

   const validation = (employee) => {
    if(employee.firstName === "" )
    {
     setfirstNameInput("form-control border border-danger");
     return false;
    }
    else
    {
     setfirstNameInput("form-control border border-success");
     
     
    }
   
    if(employee.lastName === "" )
    {
     setlastNameInput("form-control border border-danger");
     return false;
    }
    else
    {
     setlastNameInput("form-control border border-success");
     
     
    }
   
    if(employee.email === "" )
    {
     setemailInput("form-control border border-danger");
     return false;
    }
    else
    {
     setemailInput("form-control border border-success");
     
    }
   
    
    if(employee.mobileNo === "" )
    {
     setmobileNoInput("form-control border border-danger");
     return false;
    }
    else
    {
     setmobileNoInput("form-control border border-success");
     return true;
    }
   }

 const submitForm =(event) =>{
  event.preventDefault();
  
  const employee= {
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobileNo : mobileNo
}
if(validation(employee))
{
  setFirstName("");
 setlastName("");
 setEmail("");
 setMobileNo("");
  //console.log(employee);
   props.SaveToEmployeeList(employee);
}
   
  
  }

  const firstNameChanged = (event) => {
    setFirstName(event.target.value);
  }
  const lastNameChanged = (event) => {
    setlastName(event.target.value);
  }
  const emailChanged = (event) => {
    setEmail(event.target.value);
  }
  const mobileChanged = (event) => {
    setMobileNo(event.target.value);
  }
  

  


  return (
    <div className="container">
    <form onSubmit={submitForm}>
      <div className="form-group">
    <label htmlFor="email">First Name</label>
    <input type="firstname" className={firstNameInput} id="firstname"  placeholder="Enter first name"
     onChange={firstNameChanged}
     value={firstName}
     />
  </div>
  <div className="form-group">
    <label htmlFor="email">Last Name</label>
    <input type="lastname" className={lastNameInput} id="lastname"  placeholder="Enter last name"
     onChange={lastNameChanged}
     value={lastName}
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className={emailInput} id="email" placeholder="Enter email"
     onChange={emailChanged} 
     value={email}
    />
  </div>
  <div className="form-group">
    <label htmlFor="mobileNo">Mobile No</label>
    <input type="mobileNo" className={mobileNoInput} id="mobileNo"  placeholder="Enter Mobile No"
     onChange={mobileChanged}
     value={mobileNo}
     />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default EmployeeForm;