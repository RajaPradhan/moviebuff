import React from 'react';

import sampleImage from 'images/sample.jpg';

const Card = () => (
  <div className="col s12 m4">
    <div className="card">
      <div className="card-image">
        <img src={sampleImage} />
        <span className="card-title">Card Title</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <p>I am a very simple card.</p>
      </div>
    </div>
  </div>
);

export default Card;
