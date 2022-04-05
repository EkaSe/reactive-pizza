const ApiUrl = 'http://localhost:3004' 

export async function getPizzas() {

  try{
      const response = await fetch(`${ApiUrl}/pizzas`);
      return Array.from(await response.json());
  }catch(error) {
      return [];
  }  
}

export async function createOrder(data) {
  const response = await fetch(`${ApiUrl}/orders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
  return await response.json();
}