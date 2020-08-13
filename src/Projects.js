import React from "react";
import Images from "./Images/*.*";

const Project = props =>{

  const imageLocation = Images["$(props.imageName).webp"];
  return (
    <div>
    <img src={require({imageLocation})} />
    </div>
  );
}

export default Project;
