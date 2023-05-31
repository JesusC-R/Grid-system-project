import React from "react";

//Images
import Img1 from "../../assets/img/story-1.jpeg";
import Img2 from "../../assets/img/story-2.jpeg";

const StoryPicture = (props) => {
	return (
    <div className="story__pictures">
      <img className="story__img--1" src={Img1} alt="img" />
      <img className="story__img--2" src={Img2} alt="img" />
    </div>
  );
}

export default StoryPicture;