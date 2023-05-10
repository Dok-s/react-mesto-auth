import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_image ${card ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={card ? card.link : "#"}
            alt={card ? card.name : ""}
          />
          <figcaption className="popup__subimage">
            {card ? card.name : ""}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
