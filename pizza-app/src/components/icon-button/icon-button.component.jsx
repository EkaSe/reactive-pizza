import "./icon-button.component.css";

export const IconButton = (props) => {
  const handleClick = () => {
    if (!props.disabled) {
      props.onClick();
    }
  }

  const className = `button-with-icon ${props.disabled ? 'disabled' : ''}`
  
  return (
    <div className={className}
      onClick={handleClick} 
      disabled={props.disabled} 
      data-testid={props.id}>
        {props.children}
    </div>
  );
}