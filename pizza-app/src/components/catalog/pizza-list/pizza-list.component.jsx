import {PizzaListItem} from '../pizza-list-item/pizza-list-item.component';
import "./pizza-list.component.css";
import { useState } from 'react';

export const PizzaList = (props) => {
  const [expandedItemId, setExpandedItemId] = useState();

  return (
  <div className="pizza-list">
    {props.pizzas.map((item) => 
      <div key={item.id}>
        <PizzaListItem 
          isExpanded={item.id===expandedItemId}
          expand={() => setExpandedItemId(item.id)}
          data={item} 
          options={props.options}
          updateOrder={(options) => props.updateOrder(item, options, 1)}/> 
      </div>)}
  </div>);
}