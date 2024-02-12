import React from "react";
import "../Styles/Result.css";
import ResultTable from "./ResultTable";

export default function Result() {
  const resultData = {
    username: "John Doe",
    totalMarks: 50,
    totalQuestions: 10,
    totalAttempts: 10,
    totalEarnedMarks: 45,
    examResult: "Pass", // You can use conditions to determine pass/fail
  };

  return (
    <>
      <div>
        <h2 className="display-4 text-dark my-4 text-center ">
          Quiz Application
        </h2>
      </div>
      <div className="container">
        <div className="result-container card p-4 bg-dark text-white">
          <h2 className="result-heading text-left text-center ">Result</h2>
          <div className="result-item d-flex justify-content-between mb-2">
            <div className="title">
              <strong>Username:</strong>
            </div>
            <div className="value">{resultData.username}</div>
          </div>
          <div className="result-item d-flex justify-content-between mb-2">
            <div className="title">
              <strong>Total Marks:</strong>
            </div>
            <div className="value">{resultData.totalMarks}</div>
          </div>
          <div className="result-item d-flex justify-content-between mb-2">
            <div className="title">
              <strong>Total Questions:</strong>
            </div>
            <div className="value">{resultData.totalQuestions}</div>
          </div>
          <div className="result-item d-flex justify-content-between mb-2">
            <div className="title">
              <strong>Total Attempts:</strong>
            </div>
            <div className="value">{resultData.totalAttempts}</div>
          </div>
          <div className="result-item d-flex justify-content-between mb-2">
            <div className="title">
              <strong>Total Earned Marks:</strong>
            </div>
            <div className="value">{resultData.totalEarnedMarks}</div>
          </div>
          <div className="result-item d-flex justify-content-between mb-2">
            <div className="title">
              <strong>Exam Result:</strong>
            </div>
            <div className="value">{resultData.examResult}</div>
          </div>
        </div>

          <ResultTable></ResultTable>
        
      </div>
    </>
  );
}
