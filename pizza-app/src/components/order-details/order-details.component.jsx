import {Pizza} from '../pizza/pizza.component';

export const OrderDetails = (props) => {
  return (    
    <div>
      <h2>Order details: </h2>
      {props.pizzas.map((item) => 
        <div key={item.id}>
          <Pizza data={item} updateOrder={(increment) => props.updateOrder(item.id, increment)}/> 
        </div>)}
  </div>);
}