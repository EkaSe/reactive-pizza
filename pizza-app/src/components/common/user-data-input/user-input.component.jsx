import './user-input.component.css';
import React, { useCallback, useState } from 'react';

const UserInput = React.forwardRef(({
  id, label, placeholder, value, onChange, type, isInvalid, invalidReason,
}, ref) => {
  const [isTouched, setIsTouched] = useState(false);

  const [focused, setFocused] = React.useState(false);
  const onBlur = useCallback(() => {
    setFocused(false);
    setIsTouched(true);
  }, []);

  const showError = isTouched && !focused && isInvalid;

  return (
    <div className="container">
      <label htmlFor={`${id}-input`} className="user-input-label">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        className={showError ? 'user-input invalid' : 'user-input'}
        placeholder={placeholder}
        id={`${id}-input`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
      />
      {showError && (<div className="invalid-reason">{invalidReason}</div>)}
    </div>
  );
});

export default UserInput;
