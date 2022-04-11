import React from 'react';
import PropTypes from 'prop-types';
import { AmountAdjuster } from '../amount-adjuster/amount-adjuster.component';
import './pizza.component.css';

export function Pizza({ data: { title, price, amount }, updateOrder }) {
  return (
    <div className="pizza-container">
      <div>{title}</div>
      <div>{price}</div>
      <AmountAdjuster
        amount={amount}
        onIncrement={() => updateOrder(1)}
        onDecrement={() => updateOrder(-1)}
      />
    </div>
  );
}

Pizza.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
  updateOrder: PropTypes.func.isRequired,
};
