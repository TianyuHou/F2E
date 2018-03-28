import React from 'react';
import { Link } from 'react-router-dom';

const Apply = ({ identity, content }) => {
  return (
    <div className={`apply-content`}>
      <div className={`apply-${identity}`} />
      <h1>Become a {identity}</h1>
      <h2>{content}</h2>
      <Link to="/Register" className="apply-btn">
        {/* <button className="apply-btn"> */}
        Apply<i className="fas fa-chevron-circle-right" />
        {/* </button> */}
      </Link>
    </div>
  );
};

export default Apply;
