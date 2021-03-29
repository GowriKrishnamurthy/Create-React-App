import React from "react";

//const Employee = ({firstName,lastName, role}) => {

const Employee = (props) => {
// different name can be assigned to a member variable(eg.role)
// Destructuring 
 const {firstName,lastName, role:jobTitle} = props;
  return (
    <div>
      <h6>
        Employee {firstName} {lastName} is a {jobTitle}
      </h6>
    </div>
  );
};

export default Employee;
