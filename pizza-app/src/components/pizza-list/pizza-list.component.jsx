import {Pizza} from '../pizza/pizza.component';
import "./pizza-list.component.css";

export const PizzaList = (props) => {
  return (
  <div className="pizza-list">
    {props.pizzas.map((item) => 
      <div key={item.id}>
        <Pizza data={item} updateOrder={(increment) => props.updateOrder(item.id, increment)}/> 
      </div>)}
  </div>);
}