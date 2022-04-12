import './App.css';
import React, { useEffect, useState } from 'react';
import { getPizzas, getOptions } from './services/api-service';
import PizzaList from './components/catalog/pizza-list/pizza-list.component';
import OrderPreview from './components/shopping-cart/order-preview/order-preview.component';
import { addToOrder, adjustOrderAmount } from './services/order-service/order-service';
import { ReactComponent as PizzaSliceSvg } from './assets/pizza-slice.svg';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [options, setOptions] = useState([]);
  const [order, setOrder] = useState([]);

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

  return (
    <div className="wrapper">
      <div className="header">
        <PizzaSliceSvg />
        Reactive Pizza
        <PizzaSliceSvg />
      </div>
      {pizzas && (
        <div className="catalog">
          <PizzaList pizzas={pizzas} options={options} updateOrder={updateOrder} />
        </div>
      )}
      {order && (
        <div className="order">
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
  );
}

export default App;
