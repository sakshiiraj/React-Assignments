import ContactInfo from "./ContactInfo";
import StatusInfo from "./StatusInfo";
import RoleInfo from "./RoleInfo";

const Content = ({ employee }) => {
  return (
    <div className="Content">
      <ContactInfo employee={employee} />
      <StatusInfo employee={employee} />
      <RoleInfo employee={employee} />
    </div>
  );
};
export default Content;
