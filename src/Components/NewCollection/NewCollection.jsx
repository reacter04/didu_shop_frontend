import React from "react";
import "./NewCollection.css";
import newCollection from "../Assets/newCollection";
import Item from "../Item/Item";

function NewCollection() {
  return (
    <div className="new-collection">
      <h1>COLECTIILE NOI</h1>
      <hr />
      <div className="collection">
        {newCollection.map(item => (
          <Item
            key={crypto.randomUUID()}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
