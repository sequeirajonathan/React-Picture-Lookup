import React from "react";

const ImageList = props => {
  let { images } = props;

  const imageList = images.map(image => {
    return <img src={image.urls.regular} alt={image.alt} />;
  });

  return <div>{imageList}</div>;
};

export default ImageList;
