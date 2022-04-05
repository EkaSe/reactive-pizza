import { AmountAdjuster } from "../amount-adjuster/amount-adjuster.component";
import "./pizza.component.css";

export const Pizza = (props) => {
  return (
    <div className="pizza-container">
      <div>{props.data.title}</div>
      <div>{props.data.price}</div>
      <AmountAdjuster 
        amount={props.data.amount}
        onIncrement={() => props.updateOrder(1)} 
        onDecrement={() => props.updateOrder(-1)}/>
    </div>
  );
}