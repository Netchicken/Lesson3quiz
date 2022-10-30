const QHeader = ({ props }) => {
  return (
    <div>
      <div className='row'>
        <div className='appheadermeaningtext'>{props.Q ? props.Q : ""}</div>
      </div>
    </div>
  );
};
export default QHeader;
