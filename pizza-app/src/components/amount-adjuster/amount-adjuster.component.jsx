import "./amount-adjuster.component.css";
import {ReactComponent as MinusSvg} from '../../assets/minus-svgrepo-com.svg';
import {ReactComponent as PlusSvg} from '../../assets/plus-svgrepo-com.svg';
import { IconButton } from "../icon-button/icon-button.component";

export const AmountAdjuster = (props) => {
  return (
    <div className="amount-adjuster">
      <IconButton
        onClick={props.onDecrement} 
        disabled={props.amount === 0} 
        id={`${props.id}-minus`}>
          <MinusSvg />
      </IconButton>
      <span data-testid={`${props.id}-amount`}>{props.amount}</span>
      <IconButton
        onClick={props.onIncrement} 
        id={`${props.id}-plus`}>
          <PlusSvg />
      </IconButton>
    </div>
  );
}