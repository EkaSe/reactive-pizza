import { IconButton } from "./../icon-button/icon-button.component";
import {ReactComponent as MinusSvg} from '../../../assets/minus-svgrepo-com.svg';
import {ReactComponent as PlusSvg} from '../../../assets/plus-svgrepo-com.svg';
import "./option.component.css";

export const Option = (props) => {
  const buttonIcon = props.isEnabled ? (<MinusSvg />) : (<PlusSvg />)

  return (
    <div className="option" data-testid="option-container">
      <div>{props.title}</div>
      <div>{`$${props.price}`}</div>
      <IconButton onClick={props.isEnabled ? props.removeOption : props.addOption}>
          {buttonIcon}
      </IconButton>
    </div>);
}