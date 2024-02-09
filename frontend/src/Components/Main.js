import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/Main.css"; // Import the custom CSS file

const Main = () => {
  const inputRef = useRef(null);

  return (
    <div className="container my-4 text-center text-light"> {/* Fix the typo here */}
      <h1 className="display-4 text-dark mb-4">Quiz Application</h1>

      <div className="card mx-auto p-4">
        <p className="lead">
          Welcome to the quiz! Before you begin, please read and understand the following rules:
        </p>

        <ol className="text-left pl-4">
          <li>Each question has a set time limit. Make sure to answer within the specified time.</li>
          <li>Once you select an answer, it cannot be changed, so choose wisely.</li>
          <li>Points will be awarded for each correct answer. The total score will be displayed at the end.</li>
          <li>Incorrect answers may result in a deduction of points, depending on the quiz settings.</li>
          <li>Do not use any external resources or assistance during the quiz.</li>
          <li>Enjoy the quiz and have fun!</li>
        </ol>

        <p className="mt-4">
          By participating in the quiz, you agree to abide by these rules. Good luck!
        </p>

        <form className="mt-4">
          <input
            ref={inputRef}
            type="text"
            className="form-control mb-3"
            id="username"
            placeholder="Username*"
          />
          <Link to={'Quiz'} className="btn btn-primary btn-lg btn-block">
            Start Quiz
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
