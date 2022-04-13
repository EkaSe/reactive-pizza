import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PizzaListItem from '../pizza-list-item/pizza-list-item.component';
import './pizza-list.component.css';

export default function PizzaList({ pizzas, options, updateOrder }) {
  const [expandedItemId, setExpandedItemId] = useState();

  return (
    <div className="pizza-list">
      {pizzas.map((item) => (
        <div key={item.id}>
          <PizzaListItem
            isExpanded={item.id === expandedItemId}
            expand={() => setExpandedItemId(item.id)}
            data={item}
            options={options}
            updateOrder={(opts) => updateOrder(item, opts, 1)}
          />
        </div>
      ))}
    </div>
  );
}

PizzaList.defaultProps = {
  options: [],
};

PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  updateOrder: PropTypes.func.isRequired,
};
