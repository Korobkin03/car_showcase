/** @format */

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "6991f5d494mshd20325cc4a4a6b7p1c074bjsn0f6d85f7a6f6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
