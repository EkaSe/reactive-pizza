import React from 'react';
import PropTypes from 'prop-types';
import PizzaListItem from '../pizza-list-item/pizza-list-item.component';
import './pizza-list.component.css';

export default function PizzaList({ pizzas, expand }) {
  return (
    <div className="pizza-list">
      {pizzas.map((item) => (
        <div key={item.id}>
          <PizzaListItem
            expand={() => expand(item)}
            data={item}
          />
        </div>
      ))}
    </div>
  );
}

PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  expand: PropTypes.func.isRequired,
};
