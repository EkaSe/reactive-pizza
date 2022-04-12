import React from 'react';
import AmountAdjuster from '../../common/amount-adjuster/amount-adjuster.component';
import './order-item.component.css';

export default function OrderItem({
  data: {
    pizza: { title, price },
    amount,
    options,
  }, updateOrder,
}) {
  return (
    <div className="order-item">
      <div>{title}</div>
      <div>{`$${price * amount}`}</div>
      {options.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>{`$${item.price}`}</div>
        </div>
      ))}
      <AmountAdjuster
        amount={amount}
        onIncrement={() => updateOrder(1)}
        onDecrement={() => updateOrder(-1)}
      />
    </div>
  );
}
