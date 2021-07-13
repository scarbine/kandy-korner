import React from "react";

import "./Employee.css";

export const EmployeeCard = ({ employee }) => {
  const fullTime = () => {
    if (employee.isFullTime === true) {
      return "Yes";
    } else {
      return "No";
    }
  };

  const manager = () => {
    if (employee.isManager === true) {
      return "Yes";
    } else {
      return "No";
    }
  };

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__hourly_rate">
        {" "}
        Hourly Rate: ${employee.hourlyRate} per hour
      </div>
      <div className="employee__is_manager">Manager: {manager()}</div>
      <div className="employee__is_full_time">Full Time: {fullTime()}</div>
    </section>
  );
};
