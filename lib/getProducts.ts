export async function getProducts() {
  const res = await fetch("https://ilkinibadov.com/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await res.json();

  return json.products;
}

