import React, { useCallback } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import UserInput from '../user-data-input/user-input.component';

export default function PhoneUserInput({
  id, phone, setPhone, isInvalid, setPhoneInvalid,
}) {
  const phoneRef = React.createRef();

  const onChange = useCallback((value) => {
    setPhone(value);
    setPhoneInvalid(!isValidPhoneNumber(value));
  }, [setPhone, setPhoneInvalid]);

  return (
    <PhoneInput
      ref={phoneRef}
      inputComponent={UserInput}
      id={id}
      label="Phone"
      placeholder="+357 95 123456"
      value={phone}
      onChange={onChange}
      isInvalid={isInvalid}
      invalidReason="Please enter a valid phone number"
      type="tel"
    />
  );
}
