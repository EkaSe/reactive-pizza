import React from 'react';
import './amount-adjuster.component.css';
import PropTypes from 'prop-types';
import { ReactComponent as MinusSvg } from '../../../assets/minus-svgrepo-com.svg';
import { ReactComponent as PlusSvg } from '../../../assets/plus-svgrepo-com.svg';
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
        <MinusSvg />
      </IconButton>
      <span data-testid={`${id}-amount`}>{amount}</span>
      <IconButton
        onClick={onIncrement}
        data-testid={`${id}-plus`}
      >
        <PlusSvg />
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
