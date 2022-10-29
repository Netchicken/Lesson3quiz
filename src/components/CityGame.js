import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select"; //for my select dropdown
import "bootstrap/dist/css/bootstrap.min.css"; //leatest v5
import Section from "./Section"; //shows country info
import Footer from "./Footer"; //shows country info
import Results from "./ResultsPage"; //shows the results
import { GetRandomNumber, alertItemName } from "../Operations/AllOperations";
import { quizData, AnswerList } from "../Assets/quiz";

const CityGame = () => {
  //  const [allData, setAllData] = useState(quiz); //all the data of the countries

  const [gameData, setGameData] = useState({
    //for the game being currently played
    Q: "Start",
    A: "Start",
  });

  const [answersData, setAnswersData] = useState([]);
  let selectedCity;

  const [number, setNumber] = useState(0); //random number
  const [citiesCorrect, setCitiesCorrect] = useState([]);
  const [citiesWrong, setCitiesWrong] = useState([]);
  const [selectCityData, setSelectCityData] = useState();
  //const [allAnswers, setAllAnswers] = useState();
  const allData = quizData;
  const [answerData, setAnswerData] = useState();

  const onClickHandlerNewGame = () => {
    //  console.log("onClickHandlerNewGame", "triggered");
    LoadGamedata();

    //  console.log("onClickHandlerNewGame Random number", number);
    //  console.log("onClickHandlerNewGame ", allData[number]);
  };
  //https://stackoverflow.com/questions/71581036/map-data-in-react-to-array-of-objects
  // function createQuizAnswers() {
  //   var getSelectDataList = [{ value: "1", label: "answer" }];
  //   getSelectDataList = allData.map((item) => ({
  //     value: item.A,
  //     label: item.A,
  //   }));
  //   return getSelectDataList;
  // }

  const CreateSelectData = () => {
    const list = allData.map((item) => ({ value: item.A, label: item.A }));
    console.log("CreateSelectData list", list);
    setAnswerData(list);
  };

  function LoadGamedata() {
    let length = allData.length;
    CreateSelectData();

    console.log("LoadGamedata length", length);

    console.log("LoadGamedata answerData", answerData);
    let Rand = GetRandomNumber(length);
    setNumber(Rand);

    allData.map(() => {
      var selecteditem = allData[number]; //get the data at that point
      setGameData({
        Q: selecteditem.Q,
        A: selecteditem.A,
      });
      console.log("Selected item Q A", selecteditem.Q + " " + selecteditem.A);
    });
  }

  const CheckForWinnerLoser = () => {
    console.log("CheckForWinnerLoser gameData.CapitalName", gameData.Placename);
    //setToggleTextIsHidden("true"); //hide the text

    console.log("CheckForWinnerLoser selectedCity", selectedCity);

    if (selectedCity != null && gameData.Placename !== null) {
      if (selectedCity === gameData.Placename) {
        alertItemName("Yes! You win! The place is " + selectedCity);
        // pass in the citiescorrect state, spread it,  and pass both to setCitiesCorrect

        let url = (
          <a
            href={"https://www.google.com/search?q=new+zealand+" + selectedCity}
          >
            Visit
          </a>
        );

        setCitiesCorrect((citiesCorrect) => [
          ...citiesCorrect,
          selectedCity + " is " + gameData.Components,
        ]);
      } else {
        alertItemName(
          "Sorry. The place is not " + selectedCity + ". Try again"
        );
        // pass in the citiesWrong state, spread it,  and pass both to setCitiesWrong
        setCitiesWrong((citiesWrong) => [
          ...citiesWrong,
          selectedCity + " is not " + gameData.Meaning,
        ]);
      }
    }
  };

  const handleCityChange = (e) => {
    console.log(" handleChange city Selected!!", e.value);
    selectedCity = e.value;
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
    return selectedCity
      ? "Select an Answer " + selectedCity
      : "Select an Answer";
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Section className='sectionTitle' props={gameData} />
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
            value={selectedCity}
            onChange={handleCityChange}
            placeholder={newplaceholder()} //'Select the place'
            controlShouldRenderValue={true}
          />
        </div>

        <Results citiesCorrect={citiesCorrect} citiesWrong={citiesWrong} />
      </div>

      <Footer props={gameData} />
    </div>
  );
  // }
};

export default CityGame;
