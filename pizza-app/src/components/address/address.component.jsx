import React, { useState } from 'react';
import UserInput from '../common/user-data-input/user-input.component';
import 'react-phone-number-input/style.css';
import PhoneUserInput from '../common/phone-user-input/phone-user-input.component';

export default function UserInfo() {
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="user-data-container" data-testid="address-container">
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
        value={phone}
        onChange={setPhone}
      />
    </div>
  );
}
