import React from 'react';
import PropTypes from 'prop-types';
import { Pizza } from '../pizza/pizza.component';
import './pizza-list.component.css';

export function PizzaList({ pizzas, updateOrder }) {
  return (
    <div className="pizza-list">
      {pizzas.map((item) => (
        <div key={item.id}>
          <Pizza data={item} updateOrder={(increment) => updateOrder(item.id, increment)} />
        </div>
      ))}
    </div>
  );
}

PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.string.isRequired,
  })).isRequired,
  updateOrder: PropTypes.func.isRequired,
};
