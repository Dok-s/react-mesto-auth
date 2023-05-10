import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name} ${props.isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form"
          name={props.formName}
          onSubmit={props.onSubmit}
        >
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button className="popup__button" name="button" type="submit">
            {props.textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
