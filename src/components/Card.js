import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({
  card,
  onCardClick,
  onCardDelete,
  onCardLike,
  onQuestionClick,
}) {
  function handleCardClick() {
    onCardClick(card);
  }

  function handleQuestionClick() {
    onQuestionClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `photo-card__like ${
    isLiked && "photo-card__like_type_on"
  }`;

  return (
    <div className="photo-card">
      {isOwn && (
        <button
          className="photo-card__bin"
          type="button"
          onClick={handleQuestionClick}
        />
      )}
      <img
        className="photo-card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="photo-card__title-like">
        <h2 className="photo-card__title">{card.name}</h2>
        <div className="photo-card__likes">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleCardLike}
          ></button>
          <span className="photo-card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
