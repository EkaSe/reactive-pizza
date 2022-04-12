import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../common/icon-button/icon-button.component';
import Option from '../../common/option/option.component';
import './pizza-list-item.component.css';

export default function PizzaListItem({ data: { title, price }, options, updateOrder }) {
  const [selectedOptions, setSelectedOptions] = useState(options.map((option) => ({
    ...option,
    isEnabled: false,
  })));

  const setOptionEnabled = useCallback((optionId, isEnabled) => {
    setSelectedOptions((opts) => opts.map((option) => ((option.id === optionId)
      ? { ...option, isEnabled }
      : option)));
  });

  const addToCart = useCallback(() => {
    updateOrder(selectedOptions.filter((option) => option.isEnabled));
    setSelectedOptions(options.map((option) => ({ ...option, isEnabled: false })));
  }, [selectedOptions]);

  return (
    <div className="pizza-container">
      <div>{title}</div>
      <div>{`$${price}`}</div>
      {selectedOptions.map((item) => (
        <div key={item.id}>
          <Option
            title={item.title}
            price={item.price}
            isEnabled={item.isEnabled}
            addOption={() => setOptionEnabled(item.id, true)}
            removeOption={() => setOptionEnabled(item.id, false)}
          />
        </div>
      ))}

      <IconButton onClick={addToCart}>
        Add to cart
      </IconButton>
    </div>
  );
}

PizzaListItem.defaultProps = {
  options: [],
};

PizzaListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  updateOrder: PropTypes.func.isRequired,
};
