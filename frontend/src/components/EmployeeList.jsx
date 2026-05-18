import { Link } from "react-router-dom";

function EmployeeList({ employees }) {
  return (
    <div>

      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (
        employees.map((employee) => (
          <div
            key={employee._id}
            className="employee-card"
          >

            <h3>{employee.name}</h3>

            <p>
              Email: {employee.email}
            </p>

            <p>
              Department: {employee.department}
            </p>

            <p>
              Skills:
              {" "}
              {employee.skills.join(", ")}
            </p>

            <p>
              Performance Score:
              {" "}
              {employee.performanceScore}
            </p>

            <p>
              Experience:
              {" "}
              {employee.experience} years
            </p>

            <Link
              to={`/recommendation/${employee._id}`}
            >
              AI Recommendation
            </Link>

          </div>
        ))
      )}

    </div>
  );
}

export default EmployeeList;