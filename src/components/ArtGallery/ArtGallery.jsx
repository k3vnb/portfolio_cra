import React, { useState } from "react";
import ArtCard from "../ArtCard/ArtCard";
import LightBox from "../LightBox/LightBox";
import "./ArtGallery.css";

const galleryList = [
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588061161/Portfolio/walrus.png",
    imageTitle: "Walrus",
  },
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588059373/Portfolio/SpaceBlahs.png",
    imageTitle: "Space Blahs",
  },
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588059370/Portfolio/mindblown.png",
    imageTitle: "Self Portrait",
  },
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588059371/Portfolio/BirdBath.png",
    imageTitle: "BirdBath",
  },
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588059372/Portfolio/CampMate.png",
    imageTitle: "Camp Mate",
  },
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588059373/Portfolio/LostInSpace.png",
    imageTitle: "Lost In Space",
  },
  {
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/v1588059372/Portfolio/DigitalWatercolor.png",
    imageTitle: "Digital Watercolor",
  },
];

const ArtGallery = () => {
  const [showLightBox, setShowLightBox] = useState(true);
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
