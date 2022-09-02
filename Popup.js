import React from "react";
import "./Popup.css";

const Popup = ({ goToGameStart, winner, XO }) => {
  return (
    <div className="popup">
      <div className="overlay"></div>
      <div className="popup-gotostart">
        {!winner && <span className="win-txt">Draw</span>}
        {winner && (
          <span className="win-txt">
            {winner ? "The winner is: " + XO : "The winner is: " + XO}
          </span>
        )}

        <button className="btn" onClick={() => goToGameStart()}>
          Go to game start
        </button>
      </div>
    </div>
  );
};
export default Popup;
