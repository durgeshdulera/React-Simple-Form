
const EmployeeList = (props) =>{
console.log('pop'+ props);
    if (props.employees.length === 0 )
    {
            return (
                <div className="text-center p-3 mb-2 bg-primary text-white">No employees found</div>
                )
    }
    if( props.employees.length > 0)
    {
    return (
        
        props.employees.map((employee,index) => {
        
        return <div className="row p-3 mb-2 bg-info text-white" key={index}>
            <div className="col-md-3">
                    {employee.firstName}
            </div>
            <div className="col-md-3">
                    {employee.lastName}      
            </div>
            <div className="col-md-3">
                    {employee.mobileNo}
            </div>
            <div className="col-md-3">
                    {employee.email}
            </div>
        </div>
        })
    )
    }
}
export default EmployeeList;