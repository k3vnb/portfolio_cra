import React, { useState } from "react";
import ArtCard from "../ArtCard/ArtCard";
import LightBox from "../LightBox/LightBox";
import { galleryList } from "../../STORE";
import "./ArtGallery.css";

const ArtGallery = () => {
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const toggleShowLightBox = () => setShowLightBox(!showLightBox);
  const handleSelectImage = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    toggleShowLightBox();
  };
  const handleClickNext = () => {
    let currentIndex = selectedImageIndex;
    if (currentIndex < galleryList.length - 1) {
      currentIndex += 1;
      setSelectedImageIndex(currentIndex);
    } else {
      setSelectedImageIndex(0);
    }
  };
  return (
    <div className="illustration-gallery">
      <div className="gallery-overlay">
        <h2>Sample &nbsp;Illustrations</h2>
        <div className="illustration-container">
          {galleryList.slice(0, 4).map(({ imageURL, imageTitle }, i) => (
            <ArtCard
              key={imageTitle}
              id={i}
              imageTitle={imageTitle}
              imageURL={imageURL}
              onSelectImage={handleSelectImage}
            />
          ))}
        </div>
        {showLightBox && (
          <LightBox
            imageData={galleryList[selectedImageIndex]}
            toggleShowLightBox={toggleShowLightBox}
            onClickNext={handleClickNext}
          />
        )}
      </div>
    </div>
  );
};

export default ArtGallery;
