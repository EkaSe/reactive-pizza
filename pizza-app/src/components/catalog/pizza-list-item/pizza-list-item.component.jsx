import React from 'react';
import PropTypes from 'prop-types';
import './pizza-list-item.component.css';
import { ReactComponent as PizzaSvg } from '../../../assets/Pizza.svg';

export default function PizzaListItem({ data: { title, price }, expand }) {
  function expandOnKeyDown(e) {
    if (e.keyCode === 13) {
      expand();
    }
  }

  return (
    <div
      className="pizza-container"
      onClick={expand}
      onKeyDown={expandOnKeyDown}
      role="button"
      tabIndex="0"
    >
      <PizzaSvg />
      <div className="pizza-info">
        <div>{title}</div>
        <div>{`$${price}`}</div>
      </div>
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
