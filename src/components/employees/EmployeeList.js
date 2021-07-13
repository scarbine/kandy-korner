import React, { useContext, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);
  return (
    <>
     
      {console.log("EmployeeList: Render", employees)}
      {employees.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />;
      })}
    </>
  );
};
