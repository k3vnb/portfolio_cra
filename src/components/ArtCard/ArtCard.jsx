import React from "react";
import "./ArtCard.css";

const ArtCard = ({ imageURL, imageTitle, id, onSelectImage }) => {
  const handleSelectImage = () => onSelectImage(id);
  return (
    <div className="gallery-card" onClick={handleSelectImage}>
      <img className="gallery-image" src={imageURL} alt={imageTitle} />
    </div>
  );
};

export default ArtCard;
