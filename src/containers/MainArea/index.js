import React from 'react';
import _ from 'lodash';

import Card from 'components/Card';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MainArea = () => (
  <div className="col s12 m8" style={{ border: '1px solid red' }}>
    <div className="row">{_.map(cards, card => <Card key={card} />)}</div>
  </div>
);

export default MainArea;
