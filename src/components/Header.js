const QHeader = ({ props }) => {
  return (
    <div>
      <div className='container-fluid  justify-content-md-center App-header '>
        <h1 className='title' align='center'>
          The Kiwi quiz
        </h1>
      </div>
      <div className='row'>
        <div className='appheadermeaningtext'>{props.Q ? props.Q : ""}</div>
      </div>
    </div>
  );
};
export default QHeader;
