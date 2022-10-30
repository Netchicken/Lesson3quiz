const QHeader = ({ props }) => {
  return (
    <div>
      <div className='row container-fluid  justify-content-md-center App-header '>
        <h1 className='col title' align='center'>
          The Kiwi quiz
        </h1>
          
        <div className='col appheadermeaningtext'>{props.Q ? props.Q : ""}</div>
      </div>
    </div>
  );
};
export default QHeader;
