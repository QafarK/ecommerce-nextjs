export async function getProductById(stringId: string) {
  const res = await fetch(`https://ilkinibadov.com/api/v1/products/${stringId}/details`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const json = await res.json();

  return json;
}
