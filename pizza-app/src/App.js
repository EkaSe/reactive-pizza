import './App.css';
import { useEffect, useState } from 'react';
import { createOrder, getPizzas } from './services/api-service';
import { PizzaList } from './components/pizza-list/pizza-list.component'
import { OrderDetails } from './components/order-details/order-details.component'

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function fetchPizzas() {        
      const result = await getPizzas();
      setPizzas(result.map(item => { return {...item, amount: 0}}));      
    };

    if (!pizzas || pizzas.length === 0){      
      fetchPizzas();
    }
  }, [true]);

  const sendOrder = async () =>  {
    await createOrder({
      address: address, 
      pizzas: pizzas.filter(item => item.amount > 0)
    });
    setAddress("");
    setPizzas(items => items.map(item => { return {...item, amount: 0}}));
  }

  const updateOrder = (pizzaId, increment) =>  {
    setPizzas(pizzas
      .map(item => item.id === pizzaId ? {...item, amount: item.amount + increment} : {...item}));
  }

  return (
    <div className="App">
      <h1>Reactive Pizza</h1>
      {pizzas && ( <PizzaList pizzas={pizzas} updateOrder={updateOrder}/> )}
      {pizzas && ( <OrderDetails pizzas={pizzas.filter(item => item.amount > 0)} updateOrder={updateOrder}/> )}
      <button onClick={sendOrder}>buy</button>
    </div>
  );
}

export default App;
