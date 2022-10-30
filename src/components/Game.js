import "../App.css";
import React, { useState } from "react";
import Select from "react-select"; //for my select dropdown
import "bootstrap/dist/css/bootstrap.min.css"; //leatest v5
import Header from "./Header"; //shows country info
import Footer from "./Footer"; //shows country info
import Results from "./ResultsPage"; //shows the results
import { GetRandomNumber, alertItemName } from "../Operations/AllOperations";
import { quizData } from "../Assets/quiz";

const Game = () => {
  const [gameData, setGameData] = useState({
    //for the game being currently played
    Q: "Start",
    A: "Start",
  });

  //const [answersData, setAnswersData] = useState([]);

  const [number, setNumber] = useState(0); //random number
  const [answerCorrect, setAnswerCorrect] = useState([]);
  const [answerWrong, setAnswerWrong] = useState([]);
  const [answerData, setAnswerData] = useState();
  const allData = quizData;
  let answer;

  const onClickHandlerNewGame = () => {
    //  console.log("onClickHandlerNewGame", "triggered");
    LoadGamedata();

    //  console.log("onClickHandlerNewGame Random number", number);
    //  console.log("onClickHandlerNewGame ", allData[number]);
  };

  const CreateSelectData = () => {
    const list = allData.map((item) => ({ value: item.A, label: item.A }));
    //  sort by String property ASCENDING (A - Z)
    //const strAscending = [...employees].sort((a, b) => a.name > b.name ? 1 : -1,
    const listSorted = [...list].sort((a, b) => (a.value > b.value ? 1 : -1));
    console.log("CreateSelectData list", listSorted);
    setAnswerData(listSorted);
  };

  function LoadGamedata() {
    let length = allData.length;
    CreateSelectData();

    console.log("LoadGamedata length", length);

    console.log("LoadGamedata answerData", answerData);
    let rand = GetRandomNumber(length);
    setNumber(rand);
    setGameData({ Q: allData[rand].Q, A: allData[rand].A });
    // allData.map(() => {
    //   var selecteditem = allData[number]; //get the data at that point
    //   setGameData({
    //     Q: selecteditem.Q,
    //     A: selecteditem.A,
    //   });
    //   console.log("Selected item Q A", selecteditem.Q + " " + selecteditem.A);
    // });
  }

  const CheckForWinnerLoser = () => {
    console.log("CheckForWinnerLoser gameData.CapitalName", gameData.Q);
    //setToggleTextIsHidden("true"); //hide the text

    console.log("CheckForWinnerLoser selectedanswer", answer);

    if (answer != null && gameData.A !== null) {
      if (answer === gameData.A) {
        alertItemName("Yes! You win! The answer is " + answer);

        setAnswerCorrect((answersCorrect) => [
          ...answersCorrect,
          answer + " is " + gameData.Q,
        ]);
      } else {
        alertItemName("Sorry. The answer is not " + answer + ". Try again");
        // pass inanswer state, spread it,  and pass both to setCitiesWrong
        setAnswerWrong((answerWrong) => [
          ...answerWrong,
          answer + " is not " + gameData.Q,
        ]);
      }
    }
  };

  const handleCityChange = (e) => {
    console.log(" handleChange city Selected!!", e.value);
    answer = e.value;
    CheckForWinnerLoser();
  };
  //for the dropdown select https://blog.logrocket.com/getting-started-with-react-select/
  const selectCustomStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid green",
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "green" : "white",
      padding: "0px",
    }),
  };

  const newplaceholder = () => {
    return answer ? "Select an Answer " + answer : "Select an Answer";
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header className='sectionTitle' props={gameData} />
        <div className='col-sm d-flex justify-content-center'>
          <button
            className='buttonSubmit btn btn-default'
            onClick={onClickHandlerNewGame}
          >
            Choose a random Question
          </button>
        </div>
        <div className='col-sm'>
          <Select
            styles={selectCustomStyles}
            options={answerData}
            className='selectDropDownStyle'
            value={answer}
            onChange={handleCityChange}
            placeholder={newplaceholder()} //'Select the place'
            controlShouldRenderValue={true}
          />
        </div>

        <Results answerCorrect={answerCorrect} answerWrong={answerWrong} />
      </div>

      <Footer props={gameData} />
    </div>
  );
  // }
};

export default Game;
