import React, { useContext } from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onQuestionClick,
  onCardDelete,
  cards,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-hover" onClick={onEditAvatar}>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Фото профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__button-create"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subname">{currentUser.about}</p>
        </div>
        <button
          className="profile__button"
          name="button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="photo-cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike}
            onQuestionClick={onQuestionClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
