import React, { createContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import ConfirmationModel from "../../components/ConfirmationModel";
import { questionsList } from "../../utils/questionsData";
import { Button } from "react-bootstrap";
import "../../App.css";

export const QuestionDataContext = createContext();

function Home() {
  const navigate = useNavigate();
  const [qnNum, setQnNum] = useState(1);
  const [answers, setAnswers] = useState({});
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    console.log(questionsList.questions.length,answers.length);
    if (questionsList?.questions?.length !== Object.keys(answers).length) {
      setShow(true);
      return;
    }
    else{
      const state ={answers,questionsList}
      navigate("/results",{state:state});
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <QuestionDataContext.Provider
      value={{ qnNum, answers, setAnswers, setQnNum }}
    >
      <Container
        fluid
        className="bg-green-dark vh-100 d-flex flex-column overflow-hidden"
      >
        <Row className="flex-shrink-0 justify-content-end mt-3 mx-1 px-5">
          <Button
            varient="success"
            className="bg-success border-success text-right w-auto font-weight-bold"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Row>
        <Row className="flex-grow-1 p-5 pt-2 overflow-hidden">
          <Col md={3} className="h-100 overflow-hidden">
            <Card className="h-100 overflow-hidden">
              <Card.Body className="d-flex flex-column overflow-auto">
                <LeftSidebar />
              </Card.Body>
            </Card>
          </Col>
          <Col md={9} className="h-100 overflow-hidden">
            <Card className="h-100 overflow-hidden">
              <Card.Body className="d-flex flex-column overflow-auto">
                <RightSidebar />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {show && <ConfirmationModel handleClose={handleClose} show={show} />}
    </QuestionDataContext.Provider>
  );
}

export default Home;
