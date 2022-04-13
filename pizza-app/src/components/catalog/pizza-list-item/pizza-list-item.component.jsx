import React from 'react';
import PropTypes from 'prop-types';
import './pizza-list-item.component.css';

export default function PizzaListItem({ data: { title, price }, expand }) {
  return (
    <div className="pizza-container">
      <div>{title}</div>
      <div>{`$${price}`}</div>
      <button type="button" onClick={expand}>expand</button>
    </div>
  );
}

PizzaListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  expand: PropTypes.func.isRequired,
};
