import React from "react";

const PhotoContainer = (props) => {
  const displayPhotos = () => {
    return props.photos.map((photo) => {
      return <Photo url={photo._links.thumbnail.href} />;
    });
  };

  return (
    <>
      <section>{displayPhotos()}</section>
    </>
  );
};

const Photo = (props) => {
  console.log(props);
  return (
    <section>
      <img src={props.url} alt="result photo" />
    </section>
  );
};

export default PhotoContainer;
