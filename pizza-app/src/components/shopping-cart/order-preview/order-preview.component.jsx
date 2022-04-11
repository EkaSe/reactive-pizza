import { OrderItem } from '../order-item/order-item.component';
import { IconButton } from "../../common/icon-button/icon-button.component";
import "./order-preview.component.css";
import { createOrder } from '../../../services/api-service';
import { useState, useCallback } from 'react';

export const OrderPreview = (props) => {
  const [address, setAddress] = useState("");

  const buyDisabled = !props.order || props.order.length === 0;

  const sendOrder = useCallback(async () =>  {
    await createOrder(address, props.order);
    setAddress("");
    props.resetOrder();
  }, [address, props.order, props.resetOrder]);

  return (    
    <div className="order-preview">
      <h2>Order preview: </h2>
      {props.order.map((item) => 
        <div key={item.itemId}>
          <OrderItem data={item} updateOrder={(increment) => props.updateOrder(item.itemId, increment)}/> 
        </div>)}
      <IconButton onClick={sendOrder} id={`${props.id}-plus`} disabled={buyDisabled}>
          buy
      </IconButton>
  </div>);
}