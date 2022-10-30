const Footer = ({ props }) => {
  return (
    <div className='fixed-bottom border bg-light border-success'>
      <div className='row'>
        <div className='col-sm'>
          <div className='appheadercitytext'>
            <b> Hint: {props.Q ? props.Q : ""}</b>
          </div>
        </div>
        <div className='col-sm '>
          <div className='appheadercitytext'>
            <a
              href={"https://www.google.com/search?q=" + props.A}
              target='_blank' rel="noreferrer"
            >
              Google {props.A ? props.A : "No place"} (debugging)
            </a>
          </div>
        </div>
        <div className='col-sm'></div>
      </div>
    </div>
  );
};

export default Footer;
