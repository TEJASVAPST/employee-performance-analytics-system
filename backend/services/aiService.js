const getAIRecommendation =
  async (employee) => {

    let recommendation = "";

    if (employee.performanceScore >= 85) {

      recommendation =
        "Recommended for promotion and leadership training.";

    } else if (
      employee.performanceScore >= 60
    ) {

      recommendation =
        "Needs skill enhancement and advanced training.";

    } else {

      recommendation =
        "Performance improvement plan recommended.";
    }

    return recommendation;
};

module.exports =
  getAIRecommendation;