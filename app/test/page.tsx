import React from 'react'

export default async function Test() {


  const getData = async () => {
    const res = await fetch("https://ilkinibadov.com/api/v1/products");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return await res.json();
 
};

const products = await getData();
console.log(products)



  return (
    <div>
      <h1>Test Page</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}