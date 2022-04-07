const ApiUrl = 'http://localhost:3004' 

export async function getPizzas() {

  try{
      const response = await fetch(`${ApiUrl}/pizzas`);
      return Array.from(await response.json());
  }catch(error) {
      return [];
  }  
}

export async function getOptions() {

  try{
      const response = await fetch(`${ApiUrl}/options`);
      return Array.from(await response.json());
  }catch(error) {
      return [];
  }  
}

export async function createOrder(address, pizzas) {
  const order = {
    address: address,
    pizzas: pizzas.map(item => { 
      return {pizzaId: item.pizza.id, options: item.options.map(option => option.id), amount: item.amount}
    })
  };
  const response = await fetch(`${ApiUrl}/orders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(order)
    })
  return await response.json();
}