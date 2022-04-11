import React from 'react';
import PropTypes from 'prop-types';
import { Pizza } from '../pizza/pizza.component';

export function OrderDetails({ pizzas, updateOrder }) {
  return (
    <div>
      <h2>Order details: </h2>
      {pizzas.map((item) => (
        <div key={item.id}>
          <Pizza data={item} updateOrder={(increment) => updateOrder(item.id, increment)} />
        </div>
      ))}
    </div>
  );
}

OrderDetails.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.string.isRequired,
  })).isRequired,
  updateOrder: PropTypes.func.isRequired,
};
