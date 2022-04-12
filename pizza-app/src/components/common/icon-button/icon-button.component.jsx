import { useCallback } from 'react';
import './icon-button.component.css';

export default function IconButton({
  id, onClick, disabled, children,
}) {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);

  const className = `button-with-icon ${disabled ? 'disabled' : ''}`;

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      data-testid={id}
    >
      {children}
    </button>
  );
}
