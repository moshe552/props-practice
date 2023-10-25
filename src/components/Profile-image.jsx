import React from "react";

function ProfileImage(props) {
    return (<img className="circle-img" 
        src={props.img}
        alt={props.img_alt}
    />)
}

export default ProfileImage;