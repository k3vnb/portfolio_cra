import React from "react";
import { string, func, number } from "prop-types";
import "./ArtCard.css";

const ArtCard = ({ imageURL, imageTitle, id, onSelectImage }) => {
  const handleSelectImage = () => onSelectImage(id);
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") handleSelectImage(id);
  };
  return (
    <div
      tabIndex={0}
      className="gallery-card"
      role="button"
      onClick={handleSelectImage}
      onKeyDown={handleOnKeyDown}
    >
      <img
        className="gallery-card__image"
        src={imageURL}
        alt={imageTitle}
        title={imageTitle}
      />
    </div>
  );
};

ArtCard.propTypes = {
  imageURL: string.isRequired,
  imageTitle: string.isRequired,
  id: number.isRequired,
  onSelectImage: func.isRequired,
};

export default ArtCard;
