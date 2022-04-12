import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import OrderItem from '../order-item/order-item.component';
import IconButton from '../../common/icon-button/icon-button.component';
import './order-preview.component.css';
import { createOrder } from '../../../services/api-service';

export default function OrderPreview({
  id, order, updateOrder, resetOrder,
}) {
  const [address, setAddress] = useState('');

  const buyDisabled = !order || order.length === 0;

  const sendOrder = useCallback(async () => {
    await createOrder(address, order);
    setAddress('');
    resetOrder();
  }, [address, order, resetOrder]);

  return (
    <div className="order-preview">
      <h2>Order preview: </h2>
      {order.map((item) => (
        <div key={item.itemId}>
          <OrderItem data={item} updateOrder={(increment) => updateOrder(item.itemId, increment)} />
        </div>
      ))}
      <IconButton onClick={sendOrder} data-testid={`${id}-plus`} disabled={buyDisabled}>
        buy
      </IconButton>
    </div>
  );
}

OrderPreview.defaultProps = {
  id: 'order-preview-test-id',
};

OrderPreview.propTypes = {
  id: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.string.isRequired,
  })).isRequired,
  updateOrder: PropTypes.func.isRequired,
  resetOrder: PropTypes.func.isRequired,
};
