import React from "react";
import "./item-list.css";

const ItemList = ({data, onSelectPerson, children: labelRebder}) => {

    const items = data.map((item) => {
      const { id } = item;
      const onSelectItem = () => onSelectPerson(id);

      const label = labelRebder(item);

      return(
        <li className="list-group-item" key={id} onClick={onSelectItem}>
          {label}
        </li>
      )
    })
  

    return <ul className="item-list list-group">{items}</ul>;
  
}

export default ItemList
