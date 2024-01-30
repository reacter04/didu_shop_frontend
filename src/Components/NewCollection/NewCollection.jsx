import React from "react";
import "./NewCollection.css";
import newCollection from "../Assets/data/newCollection";
import Item from "../Item/Item";

function NewCollection() {

  return (
    <div className="new-collection" id="collection">
      <h1>COLECTIILE NOI</h1>
      <hr />
      <div className="collection">
        {newCollection.map((item) => (
          <Item
            key={crypto.randomUUID()}
            id={item.id}
            name={item.name}
            images={item.images}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
