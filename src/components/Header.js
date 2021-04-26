import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 /* style={headingStyle} */>{title}</h1>
      {(location.pathname === "/react-task-tracker" ||
        location.pathname === "/react-task-tracker/") && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
      {/*  <Button color='red' text='Get Out!'/>
            <Button color='yellow' text='Wait a sec' textColor='black'/> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

//CSS in JS
/* const headingStyle = {
    backgroundColor: "red", 
    color: "rgb(12,200,250)"
} */

export default Header;
