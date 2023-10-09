import React from "react";

const PhotoContainer = (props) => {
  const displayPhotos = () => {
    //console.log(props);
    return props.photos.map((photo) => {
      //console.log(photo.primaryImage);
      return <Photo url={photo.primaryImageSmall} />;
    });
  };

  return (
    <>
      <div id="img-wrapper">{displayPhotos()}</div>
    </>
  );
};

const Photo = (props) => {
  //console.log(props.primaryImage);
  return (
    <div id="img-wrapper">
      <img src={props.url} alt="result" />
    </div>
  );
};

export default PhotoContainer;
