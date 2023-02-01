const CheckForWinnerLoser = ({ yourAnswer, gameAnswer }) => {
  console.log("CheckForWinnerLoser gameData.CapitalName", gameAnswer.Q);
  console.log("CheckForWinnerLoser selectedanswer", yourAnswer);

  if (yourAnswer != null && gameAnswer.A !== null) {
    if (yourAnswer === gameAnswer.A) {
      return "Winner";
    } else {
      return "Loser";
    }
  }
};
export default CheckForWinnerLoser;
