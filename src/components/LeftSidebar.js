import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { QuestionDataContext } from "../pages/Home/Home";
import "./style.css";

const LeftSidebar = () => {
  const { setQnNum,qnNum } = useContext(QuestionDataContext);

  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
    <Button
      key={number}
      variant="success"
      className={`bg-green mx-3 my-2 number-circle ${qnNum === number ? "active" : ""}`}
      onClick={() => setQnNum(number)}
    >
      {number}
    </Button>
  ));
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-body">
        <div className="left-sidebar-body-title">
          <h4 className="m-3">Questions</h4>
          <div className="d-flex flex-wrap">{questions}</div>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
