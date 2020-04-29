import React from "react";
import "./LightBox.css";

const LightBox = ({ imageData, toggleShowLightBox, onClickNext }) => {
  const { imageURL, imageTitle } = imageData;
  return (
    <div className="lightbox">
      <button
        type="button"
        className="close-button flex-container--centered lightbox-button"
        onClick={toggleShowLightBox}
      >
        &times;
      </button>
      <img className="lightbox-image" src={imageURL} alt={imageTitle} />
      <button
        type="button"
        className="next-button flex-container--centered lightbox-button"
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};

export default LightBox;
