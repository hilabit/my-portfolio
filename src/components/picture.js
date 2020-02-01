import React from "react";

const Picture = ({ src, alt }) => (
  <div className="picture">
    <img src={src} alt={alt} className="picture-img" />
  </div>
);

export default Picture;
