import { useEffect, useState } from "react";

import API from "../services/api";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchFilter from "../components/SearchFilter";
import Navbar from "../components/Navbar";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");

  const fetchEmployees = async () => {
    try {
      let url = "/employees";

      if (department) {
        url = `/employees/search?department=${department}`;
      }

      const response = await API.get(url);

      setEmployees(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [department]);

  return (
    <div className="container">
      <Navbar />
      <h1>
        Employee Analytics System
      </h1>

      <SearchFilter
        setDepartment={setDepartment}
      />

      <EmployeeForm
        fetchEmployees={fetchEmployees}
      />

      <EmployeeList
        employees={employees}
      />

    </div>
  );
}

export default Home;