const express = require("express");

const {
  addEmployee,
  getEmployees,
  searchEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

// Add Employee
router.post("/", addEmployee);

// Get All Employees
router.get("/", getEmployees);

// Search Employee
router.get("/search", searchEmployee);

module.exports = router;