import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Option from '../../common/option/option.component';
import AmountAdjuster from '../../common/amount-adjuster/amount-adjuster.component';
import IconButton from '../../common/icon-button/icon-button.component';
import './option-selection.component.css';

export default function OptionSelection({ data: { id, title, price }, options, updateOrder }) {
  const [amount, setAmount] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState(options.map((option) => ({
    ...option,
    isEnabled: false,
  })));

  const clearSelection = useCallback(() => {
    setSelectedOptions(options.map((option) => ({ ...option, isEnabled: false })));
    setAmount(0);
  }, []);

  useEffect(() => {
    clearSelection();
  }, [id, clearSelection]);

  const setOptionEnabled = useCallback((optionId, isEnabled) => {
    setSelectedOptions((opts) => opts.map((option) => ((option.id === optionId)
      ? { ...option, isEnabled }
      : option)));
  }, []);

  const addToCart = useCallback(() => {
    updateOrder(selectedOptions.filter((option) => option.isEnabled), amount);
    clearSelection();
  }, [selectedOptions, clearSelection, amount]);

  return (
    <div className="option-selection section-container">
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
      <AmountAdjuster
        amount={amount}
        onIncrement={() => setAmount((a) => a + 1)}
        onDecrement={() => setAmount((a) => a - 1)}
      />
      {(amount > 0) && (
        <IconButton onClick={addToCart}>
          Add to cart
        </IconButton>
      )}
    </div>
  );
}

OptionSelection.defaultProps = {
  options: [],
};

OptionSelection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  updateOrder: PropTypes.func.isRequired,
};
