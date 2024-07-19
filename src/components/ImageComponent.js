import React from 'react';

const ImageComponent = ({ src, alt }) => {
  if (!src) return null; // Do not render anything if src is not provided

  return (
    <div className="image-container">
      <img className="question-image" src={src} alt={alt} />
    </div>
  );
};

export default ImageComponent;
