import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatar = React.useRef(currentUser.avatar);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
      name="popup_avatar"
      title="Обновить аватар"
      textButton="Сохранить"
      formName="addAvatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__text popup__text_type_avatar"
            id="addAvatar-text-link"
            name="avatar"
            type="url"
            ref={avatar}
            autoComplete="off"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__span addAvatar-text-link-error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
