const Results = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='resultcontainer'>
          <div className='col-sm'>
            <div className='appheadermeaningtext'>Correct</div>
            {props.answerCorrect.reverse().map((item) => {
              return (
                <div
                  className='cardBody'
                  key={item}
                  data-testid='answerCorrect'
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className='col-sm'>
            <div className='appheadermeaningtext'>Incorrect</div>
            {props.answerWrong.reverse().map((item) => {
              return (
                <div
                  key={item}
                  className='cardBody'
                  data-testid='answerIncorrect'
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Results;
