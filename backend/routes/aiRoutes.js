const express = require("express");

const {
  generateRecommendation,
} = require("../controllers/aiController");

const router = express.Router();

router.post(
  "/recommend",
  generateRecommendation
);

module.exports = router;