import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">Increment</button>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg">Decrement</button>

      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">Random</button>
    </div>
  );
};

export default Counter;