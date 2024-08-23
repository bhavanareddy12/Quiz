import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { questionsList } from "../../utils/questionsData";

const Results = () => {
  const { state } = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const correctAnswers = questionsList?.questions?.reduce(
      (total, question, index) => {
        return (
          total +
          (question.value === state.answers[question.name] ? 1 : 0)
        );
      },
      0
    );
    setCount(correctAnswers);
  }, [state]);

  return (
    <>
      <Container
        fluid
        className="bg-green-dark vh-100 d-flex flex-column overflow-hidden d-flex align-items-center justify-content-center"
      >
        <h1 className="text-light">Results</h1>
        <Card className="w-75 p-4">
          <Card.Body>
           
            <Card.Text className="text-center" style={{ fontSize: "2rem" }}>
              You got &nbsp;<strong>{count}</strong> markes out of{" "}
              <strong>{questionsList.questions.length}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Results;
