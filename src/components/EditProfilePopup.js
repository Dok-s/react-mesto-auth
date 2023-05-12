import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="popup_profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      formName="addProfile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__text popup__text_type_name"
            id="profile-text-name"
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Введите имя"
            required
            minLength="2"
            maxLength="40"
            value={name || ""}
            onChange={handleChange}
          />
          <span className="popup__span profile-text-name-error"></span>
          <input
            className="popup__text popup__text_type_subname"
            id="profile-text-subname"
            name="about"
            type="text"
            autoComplete="off"
            placeholder="Введите должность"
            required
            minLength="2"
            maxLength="200"
            value={description || ""}
            onChange={handleChange}
          />
          <span className="popup__span profile-text-subname-error"></span>
        </>
      }
    />
  );
}

export default EditProfilePopup;
