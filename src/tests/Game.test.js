import CheckForWinnerLoser from "../Operations/CheckForWinnerLoser";
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Game from "../components/Game";
import Results from "../components/ResultsPage";

//Good video https://www.youtube.com/watch?v=v6LK5alOofs
//https://www.robinwieruch.de/react-testing-library/
//In modern React, developers will not get around Jest for testing, because its the most popular testing framework out there for JavaScript applications. Apart from being a test runner -- which you can run with npm run test once you have set up your package.json with a test script -- Jest offers you the following functions for your tests:

//The describe-block is the test suite, the it-block (which also can be named test instead of it) is the test case.
// describe("true is truthy and false is falsy", () => {
//   //test suite title
//   it("true is truthy", () => {
//     //test title
//     expect(true).toBe(true); //assertion
//   });

//   it("false is falsy", () => {
//     //test title
//     expect(false).toBe(false); // assertion
//   });
// });

//this is the test suite and inside you have your tests. The test suite is a collection of tests that are related to each other. In this case, the test suite is called "Header" and it contains two tests. The first test is called "renders Header component" and the second test is called "renders Header component with props".
describe("Test the Footer Component", () => {
  //test suite title
  const gameData = {
    //mock data to pass through
    Q: "Question",
    A: "Answer",
  };
  //create a test you can use "it" instead of "test"
  it("Is The Google link displaying?", () => {
    //test title
    render(<Footer props={gameData} />); //render the component
    const FooterText = screen.getByText(/Google Answer/i); //get the text you want to test
    expect(FooterText).toBeInTheDocument(); //assertion
  });
  it("Is the Question showing?", () => {
    //test title
    render(<Footer props={gameData} />); //render the component
    const FooterText = screen.getByText(/Hint: Question/i); //get the text you want to test
    expect(FooterText).toBeInTheDocument(); //assertion
  });
});

describe("Test the Header Component", () => {
  //test suite title
  const gameData = {
    //mock data to pass through
    Q: "Start",
    A: "Auckland",
  };
  //create a test you can use "it" instead of "test"
  it("Is The Kiwi quiz displaying?", () => {
    render(<Header props={gameData} />); //render the component
    const HeadingText = screen.getByText(/The Kiwi quiz/i); //get the text you want to test
    expect(HeadingText).toBeInTheDocument(); //assertion
  });
  it("Is the question displaying from the gameData?", () => {
    //test title
    render(<Header props={gameData} />); //render the component
    const HeadingText = screen.getByText(/Start/i); //get the text you want to test
    expect(HeadingText).toBeInTheDocument(); //assertion
  });
});

//https://www.youtube.com/watch?v=Qf2k9zt3S_A
describe("Test answerCorrect and answerWrong columns", () => {
  //test suite title
  const fakeAnswerCorrect = ["correct", "correct2", "correct3"];
  const fakeAnswerWrong = ["incorrect", "incorrect2", "incorrect3"];
  //<div className='cardBody' key={item} data-testid='answerCorrect'> added data-testid to the div
  // <div key={item}  className='cardBody' data-testid='answerIncorrect'>

  it("Is answerCorrect displaying?", () => {
    const { getAllByTestId } = render(
      <Results
        answerCorrect={fakeAnswerCorrect}
        answerWrong={fakeAnswerWrong}
      />
    ); //render the component
    const correctAnswers = screen
      .getAllByTestId("answerCorrect")
      .map((div) => div.textContent); //get the content of the div with answercorrect in them

    expect(correctAnswers).toEqual(fakeAnswerCorrect); //assertion
  });

  it("Is answerWrong displaying?", () => {
    render(
      <Results
        answerCorrect={fakeAnswerCorrect}
        answerWrong={fakeAnswerWrong}
      />
    ); //render the component
    const inCorrectAnswers = screen
      .getAllByTestId("answerIncorrect")
      .map((div) => div.textContent); //get the content of the div with answercorrect in them

    expect(inCorrectAnswers).toEqual(fakeAnswerWrong); //assertion
  });
});


//===================================================================
//functional tests

test("CheckForWinnerLoser returns Loser for different inputs", () => {
  const gameData = {
    //mock data to pass through
    Q: "Start",
    A: "Auckland",
  };

  expect(
    CheckForWinnerLoser({ yourAnswer: "Sample", gameAnswer: gameData })
  ).toBe("Loser");
});

test("CheckForWinnerLoser returns Winner for  same inputs", () => {
  const gameData = {
    //mock data to pass through
    Q: "Start",
    A: "Sample",
  };

  expect(
    CheckForWinnerLoser({ yourAnswer: "Sample", gameAnswer: gameData })
  ).toBe("Winner");
});
