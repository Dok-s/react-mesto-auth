import React from "react";
import ok from "../images/ok.svg";
import fail from "../images/fail.svg";

function InfoTooltip({ name, isSignIn, isOpen, onClose }) {
  const icon = isSignIn ? ok : fail;
  const message = isSignIn
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";

  return (
    <div className={`popup ${name} ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-close popup__container-tooltip"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__tooltip-img" src={icon} alt="#" />
        <h2 className="popup__title popup__title-tooltip">{message}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
