const Employee = require("../models/Employee");

const getAIRecommendation =
  require("../services/aiService");

const generateRecommendation =
  async (req, res) => {

    try {

      const { employeeId } = req.body;

      console.log("Employee ID:", employeeId);

      const employee =
        await Employee.findById(employeeId);

      console.log("Employee:", employee);

      if (!employee) {
        return res.status(404).json({
          message: "Employee not found",
        });
      }

      const result =
        await getAIRecommendation(employee);

      res.json({
        recommendation: result,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message: error.message,
      });
    }
};

module.exports = {
  generateRecommendation,
};