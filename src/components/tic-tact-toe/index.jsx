import React, { useState } from "react";
import "./styel.css"

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function TicTacToe() {
  const [squares,setSquares]=useState(Array(9).fill(''))
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
