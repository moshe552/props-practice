import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (<div>
    <h1 className="heading">My Contacts</h1>
    {contacts.map(contact => (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.img}
        img_alt={contact.img_alt}
        tel={contact.tel}
        email={contact.email}
      />
    )
    )}
  </div>
  );
}

export default App;
