import React from 'react';

const SideBar = () => (
  <div className="col s12 offset-m1 m2" style={{ border: '1px solid #d4d1d1', backgroundColor: '#fff' }}>
    <h5>Filters</h5>
    <ul>
      <li>
        <input className="with-gap" name="group3" type="radio" id="test1" checked />
        <label htmlFor="test1">Currently running</label>
      </li>
      <li>
        <input className="with-gap" name="group3" type="radio" id="test2" checked />
        <label htmlFor="test2">Most popular</label>
      </li>
      <li>
        <input className="with-gap" name="group3" type="radio" id="test3" checked />
        <label htmlFor="test3">Recent movies</label>
      </li>
      <li>
        <input className="with-gap" name="group3" type="radio" id="test4" checked />
        <label htmlFor="test4">Epic movies</label>
      </li>
    </ul>

    <p>Genres</p>
    <ul>
      <li>
        <input type="checkbox" className="filled-in" id="comedy" checked="checked" />
        <label htmlFor="comedy">Comedy</label>
      </li>
      <li>
        <input type="checkbox" className="filled-in" id="drama" />
        <label htmlFor="drama">Drama</label>
      </li>
      <li>
        <input type="checkbox" className="filled-in" id="horror" />
        <label htmlFor="horror">Horror</label>
      </li>
    </ul>
  </div>
);

export default SideBar;
