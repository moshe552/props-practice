import React from "react";
import Card from "./Card";

function App() {
  return (<div>
    <h1 className="heading">My Contacts</h1>
<Card
    name="Sara" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    img_alt="sara's image"
    tel="646354233"
    email="sara@gmail.com"
  />
    <Card 
    name="Echik"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    img_alt="Echik's image"
    tel="69878433"
    email="echik@gmail.com"
  />
    <Card
      name="Yosi" 
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  />
  </div>
  );
}

export default App;
