import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import OrderItem from '../order-item/order-item.component';
import IconButton from '../../common/icon-button/icon-button.component';
import UserInput from '../../common/user-data-input/user-input.component';
import 'react-phone-number-input/style.css';
import PhoneUserInput from '../../common/phone-user-input/phone-user-input.component';
import './order-preview.component.css';
import { createOrder } from '../../../services/api-service';

export default function OrderPreview({
  id, order, updateOrder, resetOrder,
}) {
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneInvalid, setPhoneInvalid] = useState(false);

  const buyDisabled = !order || order.length === 0 || isPhoneInvalid || !address;

  const sendOrder = useCallback(async () => {
    await createOrder(address, order);
    setAddress('');
    resetOrder();
  }, [address, order, resetOrder]);

  return (
    <div>
      <div className="section-header">Check your order</div>
      <div className="section-container">
        {order.map((item) => (
          <div key={item.itemId}>
            <OrderItem
              data={item}
              updateOrder={(increment) => updateOrder(item.itemId, increment)}
            />
          </div>
        ))}
      </div>
      <div className="section">
        <div className="section-header">Where to deliver</div>
        <UserInput
          id="username"
          label="Name"
          placeholder="Pinco Pallino"
          value={userName}
          onChange={setUserName}
        />
        <UserInput
          id="address"
          label="Αddress"
          placeholder="The Via Sacra 34, Rome"
          value={address}
          onChange={setAddress}
          isInvalid={!address}
          invalidReason="Please enter address for delivery"
        />
        <PhoneUserInput
          id="phone"
          phone={phone}
          setPhone={setPhone}
          isInvalid={isPhoneInvalid}
          setPhoneInvalid={setPhoneInvalid}
        />
      </div>
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
