import "./App.css";

function App({ employee }) {
  return (
    <div className="container">
      <img className="employeeImg" src={employee.profileImg} alt="Employee" />
      <div className="employeeName">{employee.name}</div>
      <EmployeeDetail detailName={"Location"} detail={employee.location} />
      <EmployeeDetail detailName={"Blood Group"} detail={employee.bloodGroup} />
      <EmployeeDetail detailName={"Age"} detail={employee.age} />
    </div>
  );
}
function EmployeeDetail({ detailName, detail }) {
  return (
    <div className="employeeDetailWrapper">
      <div className="employeeDetailLbl">{detailName}</div>
      <div className="employeeDetail">{detail}</div>
    </div>
  );
}

export default App;
