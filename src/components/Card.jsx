import React from "react";
import ProfileImage from "./Profile-image";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <ProfileImage img={props.img} img_alt={props.img_alt} />
      </div>
      <div className="bottom">
        <Detail DetailInfo={props.tel} />
        <Detail DetailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
