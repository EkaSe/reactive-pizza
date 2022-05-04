import IconButton from '../icon-button/icon-button.component';
import './option.component.css';

export default function Option({
  title, price, isEnabled, removeOption, addOption,
}) {
  const buttonIcon = isEnabled ? '-' : '+';

  return (
    <div className="option" data-testid="option-container">
      <div>{title}</div>
      <div>{`$${price}`}</div>
      <IconButton onClick={isEnabled ? removeOption : addOption}>
        {buttonIcon}
      </IconButton>
    </div>
  );
}
