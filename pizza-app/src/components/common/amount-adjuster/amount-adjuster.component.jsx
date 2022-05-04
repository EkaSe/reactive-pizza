import React from 'react';
import './amount-adjuster.component.css';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/icon-button.component';

export default function AmountAdjuster({
  id, amount, onIncrement, onDecrement,
}) {
  return (
    <div className="amount-adjuster">
      <IconButton
        onClick={onDecrement}
        disabled={amount === 0}
        data-testid={`${id}-minus`}
      >
        -
      </IconButton>
      <span data-testid={`${id}-amount`} className="amount">{amount}</span>
      <IconButton
        onClick={onIncrement}
        data-testid={`${id}-plus`}
      >
        +
      </IconButton>
    </div>
  );
}

AmountAdjuster.defaultProps = {
  id: 'amount-adjuster-test-id',
};

AmountAdjuster.propTypes = {
  id: PropTypes.string,
  amount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
