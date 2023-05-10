import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChange(e) {
    if (e.target.name === "title") {
      setName(e.target.value);
    } else {
      setLink(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="popup_create"
      title="Новое место"
      textButton="Создать"
      formName="addPhoto"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__text popup__text_type_title"
            id="addPhoto-text-name"
            name="title"
            type="text"
            autoComplete="off"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            value={name || ""}
            onChange={handleChange}
          />
          <span className="popup__span addPhoto-text-name-error"></span>
          <input
            className="popup__text popup__text_type_link"
            id="addPhoto-text-link"
            name="link"
            type="url"
            autoComplete="off"
            placeholder="Ссылка на картинку"
            required
            value={link || ""}
            onChange={handleChange}
          />
          <span className="popup__span addPhoto-text-link-error"></span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
