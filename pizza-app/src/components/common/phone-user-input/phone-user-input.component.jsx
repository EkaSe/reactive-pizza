import React from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import UserInput from '../user-data-input/user-input.component';

export default function PhoneUserInput({
  id, value, onChange,
}) {
  const phoneRef = React.createRef();

  return (
    <PhoneInput
      ref={phoneRef}
      inputComponent={UserInput}
      id={id}
      label="Phone"
      placeholder="+357 95 123456"
      value={value}
      onChange={onChange}
      isInvalid={!isValidPhoneNumber(value ?? '')}
      invalidReason="Please enter a valid phone number"
      type="tel"
    />
  );
}
