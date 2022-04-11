import React from 'react';
import './amount-adjuster.component.css';
import PropTypes from 'prop-types';

export function AmountAdjuster({ amount, onIncrement, onDecrement }) {
  return (
    <div className="amount-adjuster">
      <button onClick={onDecrement} disabled={amount === 0}>-</button>
      {amount}
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

AmountAdjuster.propTypes = {
  amount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
