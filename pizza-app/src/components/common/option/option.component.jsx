import IconButton from '../icon-button/icon-button.component';
import { ReactComponent as MinusSvg } from '../../../assets/minus-svgrepo-com.svg';
import { ReactComponent as PlusSvg } from '../../../assets/plus-svgrepo-com.svg';
import './option.component.css';

export default function Option({
  title, price, isEnabled, removeOption, addOption,
}) {
  const buttonIcon = isEnabled ? (<MinusSvg />) : (<PlusSvg />);

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
