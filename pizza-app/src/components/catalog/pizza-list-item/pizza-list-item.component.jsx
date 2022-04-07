import { IconButton } from "../../common/icon-button/icon-button.component";
import { Option } from "../../common/option/option.component";
import "./pizza-list-item.component.css";
import { useState } from 'react';

export const PizzaListItem = (props) => {
  const [selectedOptions, setSelectedOptions] = useState(props.options.map(option => { 
    return {...option, isEnabled: false};
  }));

  const setOptionEnabled = (optionId, isEnabled) => {
    setSelectedOptions(selectedOptions.map(option => {
      return (option.id === optionId) ? {...option, isEnabled: isEnabled} : option
    }));
  }

  const addToCart = () => {
    props.updateOrder(selectedOptions.filter(option => option.isEnabled));
    setSelectedOptions(props.options.map(option => { return {...option, isEnabled: false}}));
  }

  return (
    <div className="pizza-container">
      <div>{props.data.title}</div>
      <div>{`$${props.data.price}`}</div>
      {selectedOptions.map((item) => 
        <div key={item.id}>
          <Option
            title={item.title}
            price={item.price}
            isEnabled={item.isEnabled}
            addOption={() => setOptionEnabled(item.id, true)}
            removeOption={() => setOptionEnabled(item.id, false)}/> 
        </div>)}

      <IconButton onClick={addToCart} >
          Add to cart
      </IconButton>
    </div>
  );
}