import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { questionsList } from "../utils/questionsData";
import { QuestionDataContext } from "../pages/Home/Home";

export default function RightSidebar() {
  const { qnNum, setQnNum, answers, setAnswers } =
    useContext(QuestionDataContext);
  const [show, setShow] = useState(false);

  console.log(answers);
  return (
    <>
      {questionsList?.questions?.map((question, index) => {
        return qnNum === index + 1 ? (
          <div key={index} className="mt-3">
            <h6 className="mt-3">
              {index + 1}. {question.no}
            </h6>
            <Formik
              initialValues={{
                [question.name]: answers[question.name] || "",
              }}
              validate={(values) => {
                const errors = {};
                if (Object.values(values)[0] === "") {
                  errors.QnVal = "Select any one option";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const updatedAnswers = { ...answers, ...values };
                setAnswers(updatedAnswers);
                if (questionsList?.questions?.length !== qnNum) {
                  setQnNum(qnNum + 1);
                }
                if(questionsList?.questions?.length === Object.keys(updatedAnswers).length) {
                  setShow(true);
                }
                setSubmitting(false);
              }}
            >
              {({ errors, values, setFieldValue, isSubmitting }) => (
                <Form>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="mt-2">
                      &nbsp;&nbsp;
                      <Field
                        type="radio"
                        id={`${question.name}-${optionIndex}`}
                        name={question.name}
                        value={option}
                        checked={values[question.name] === option}
                        onChange={() => setFieldValue(question.name, option)}
                      />
                      <label htmlFor={`${question.name}-${optionIndex}`}>
                        &nbsp;&nbsp;{option}
                      </label>
                    </div>
                  ))}
                  <div className="text-danger">
                    {errors.QnVal && errors.QnVal}
                  </div>
                  <Button
                    variant="success"
                    type="submit"
                    className="bg-green m-3"
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                  {questionsList?.questions?.length === qnNum ? null : (
                    <Button
                      variant="success"
                      className="bg-green m-3"
                      onClick={() => setQnNum(qnNum + 1)}
                    >
                      Next
                    </Button>
                  )}
                  {show && (
                    <div className="text-success">
                      You have attempted all the questions, please submit.
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        ) : null;
      })}
    </>
  );
}
