import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

function Recommendation() {
  const { id } = useParams();

  const [recommendation, setRecommendation] =
    useState("");

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const fetchRecommendation = async () => {
    try {

      const response = await API.post(
        "/ai/recommend",
        {
          employeeId: id,
        }
      );

      setRecommendation(
        response.data.recommendation
      );

    } catch (error) {

      console.log(error);

      setRecommendation(
        "Failed to load recommendation"
      );
    }
  };

  return (
    <div className="container">

      <h1>AI Recommendation</h1>

      <p>{recommendation}</p>

    </div>
  );
}

export default Recommendation;