import React, { useEffect, useState } from "react";
import "../Styles/Quiz.css"; // Import the custom CSS file
import Data from "../Database/Data";

export default function Quiz() {
  const [selectedOption, setSelectedOption] = useState(null);
  const question = Data[0];
  useEffect(() => {
    console.log(question);
  });

  const onPrev = () => {
    alert("Previous clicked");
  };

  const onNext = () => {
    alert("Next clicked");
  };

  const onSelect = (option) => {
    setSelectedOption(option);
    // alert(`Option ${option} selected`);
  };

  return (
    <>
      <div className="maindiv">
        <div className="container head-container h ">
          <h1 className="text-light quiz-heading">Questions</h1>
        </div>
        <div className="container container1 my-2 text-center ">
          <div className="question">
            <p>
              Q.{question.id}) {question.question}
            </p>
          </div>
          <div className="options-container">
            <ul className="list-unstyled" key={question.id}>
              {question.options.map((q, i) => (
                <li key={i}>
                  {/* Options list  */}
                  <input
                    type="radio"
                    name="option"
                    id={`q${i}-option`}
                    className="radio-input"
                    value={q} // Pass the correct option value
                    onChange={() => onSelect(q)} // Dynamically pass the option value
                  />
                  <label
                    className={`input-label ${
                      selectedOption === q ? "selected" : ""
                    }`}
                    htmlFor={`q${i}-option`}
                  >
                    <div className={`radio-button ${selectedOption === q ? "selected" : ""}`} />
                    {q}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="container d-flex justify-content-between mt-4">
            <button className="btn btn-primary" onClick={onPrev}>
              Prev
            </button>
            <button className="btn btn-primary" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
