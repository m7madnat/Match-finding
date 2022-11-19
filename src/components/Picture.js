import React from "react";

const Picture = ({ index }) => {
  return (
    <div className="imgContainer">
      {
        <img
          className="mainImg"
          src={require(`../../public/images/item-${index}.jpg`)}
          alt="main img"
        />
      }
    </div>
  );
};

export default Picture;
