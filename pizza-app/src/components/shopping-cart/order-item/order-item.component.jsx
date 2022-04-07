import { AmountAdjuster } from "../../common/amount-adjuster/amount-adjuster.component";
import "./order-item.component.css";

export const OrderItem = (props) => {
  return (<>
    { props.data && (
        <div className="order-item">
          <div>{props.data.pizza.title}</div>
          <div>{`$${props.data.pizza.price * props.data.amount}`}</div>
          {props.data.options.map((item) => 
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{`$${item.price}`}</div>
            </div>)}          
          <AmountAdjuster 
            amount={props.data.amount}
            onIncrement={() => props.updateOrder(1)} 
            onDecrement={() => props.updateOrder(-1)}/>
        </div>
      )}
  </>)
  ;
}