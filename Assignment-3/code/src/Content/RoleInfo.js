const RoleInfo = ({ employee }) => {
  return (
    <div className="RoleInfo">
      <div className="RoleInfoBoxWrapper">
        <div className="RoleInfoBox"></div>
      </div>
      <div className="EmployeeImg">
        <img src={employee.image} alt="" />
      </div>
      <div className="RoleDetail">
        <div className="EmployeeRole">{employee.role}</div>
        <div className="EmployeeSummary">{employee.summary}</div>
      </div>
    </div>
  );
};
export default RoleInfo;
