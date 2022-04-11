import Content from "./Content";
import Header from "./Header";

const Employee = ({ employee }) => {
  return (
    <div className="Employee">
      <Header employee={employee} />
      <Content employee={employee} />
    </div>
  );
};
export default Employee;
