import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import { getPizzas, getOptions } from './services/api-service';
import PizzaList from './components/catalog/pizza-list/pizza-list.component';
import OrderPreview from './components/shopping-cart/order-preview/order-preview.component';
import { addToOrder, adjustOrderAmount } from './services/order-service/order-service';
import { ReactComponent as PizzaSliceSvg } from './assets/pizza-slice.svg';
import OptionSelection from './components/catalog/option-selection/option-selection.component';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [options, setOptions] = useState([]);
  const [order, setOrder] = useState([]);
  const [expandedItem, setExpandedItem] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const fetchedPizzas = await getPizzas();
      const fetchedOptions = await getOptions();

      setOptions(fetchedOptions);
      setPizzas(fetchedPizzas);
    }

    fetchData();
  }, []);

  const resetOrder = () => {
    setOrder([]);
  };

  const updateOrder = (pizza, selectedOptions, increment) => {
    setOrder(addToOrder(order, pizza, selectedOptions, increment));
  };

  const changeOrderAmount = (itemId, increment) => {
    setOrder(adjustOrderAmount(order, itemId, increment));
  };

  const expand = useCallback((item) => {
    setExpandedItem((currentExpandedItem) => {
      if (currentExpandedItem && currentExpandedItem.id === item.id) {
        return setExpandedItem(undefined);
      }
      return setExpandedItem(item);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <PizzaSliceSvg />
        Reactive Pizza
        <PizzaSliceSvg />
      </div>
      <div className="content">
        {pizzas && (
          <div className="section">
            <div className="section-header">Choose your pizza</div>
            <PizzaList
              pizzas={pizzas}
              expand={expand}
            />
          </div>
        )}
        {expandedItem && (
          <div className="section">
            <OptionSelection
              data={expandedItem}
              options={options}
              updateOrder={(opts, increment) => updateOrder(expandedItem, opts, increment)}
            />
          </div>
        )}
        {order && (
          <div className="section">
            <OrderPreview
              order={order}
              pizzas={pizzas}
              options={options}
              updateOrder={changeOrderAmount}
              resetOrder={resetOrder}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
