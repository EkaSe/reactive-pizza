import { useState } from 'react';
import UserInput from '../common/user-data-input/user-input.component';

export default function Address() {
  const [address, setAddress] = useState('');

  return (
    <div className="user-data-container" data-testid="address-container">
      <div className="section-header">Where to deliver</div>
      <UserInput
        id="address"
        label="address"
        placeholder="The Via Sacra 34, Rome"
        value={address}
        setValue={setAddress}
      />
    </div>
  );
}
