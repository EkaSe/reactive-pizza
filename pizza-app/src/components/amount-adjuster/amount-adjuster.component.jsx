import "./amount-adjuster.component.css";

export const AmountAdjuster = (props) => {
  return (
    <div className="amount-adjuster">
      <button onClick={props.onDecrement} disabled={props.amount === 0}>-</button>
      {props.amount}
      <button onClick={props.onIncrement}>+</button>
    </div>
  );
}