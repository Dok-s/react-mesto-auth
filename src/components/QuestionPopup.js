import React from "react";
import PopupWithForm from "./PopupWithForm";

function QuestionPopup({ isOpen, onClose, onCardDelete }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete();
  }

  return (
    <PopupWithForm
      name="popup_question"
      title="Вы уверены?"
      textButton="Да"
      formName="deleteCard"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default QuestionPopup;
