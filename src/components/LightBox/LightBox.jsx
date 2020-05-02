import React from "react";
import { string, shape, func } from "prop-types";
import "./LightBox.css";

const LightBox = ({ imageData, toggleShowLightBox, onClickNext }) => {
  const { imageURL, imageTitle } = imageData;
  return (
    <div className="lightbox flex-container--centered">
      <button
        type="button"
        className="lightbox__close-button flex-container--centered lightbox__button"
        onClick={toggleShowLightBox}
      >
        &times;
      </button>
      <img className="lightbox__image" src={imageURL} alt={imageTitle} />
      <button
        type="button"
        className="lightbox__next-button flex-container--centered lightbox__button"
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};

LightBox.propTypes = {
  imageData: shape({
    imageURL: string.isRequired,
    imageTitle: string.isRequired,
  }).isRequired,
  toggleShowLightBox: func.isRequired,
  onClickNext: func.isRequired,
};

export default LightBox;
