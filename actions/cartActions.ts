"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const API_BASE = "https://ilkinibadov.com/api/v1/basket";


const getAuthHeaders = async (): Promise<Record<string, string>> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export async function addBasketProduct(productId: string, count: number = 1) {
  const headers = await getAuthHeaders(); 

  const res = await fetch(`${API_BASE}/add`, {
    method: "POST",
    headers,
    body: JSON.stringify({ productId, count }),
    cache: "no-store",
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Couldn't add to Basket: ${res.status} – ${error}`);
  }

  revalidatePath("/", "layout");
  revalidatePath("/cart");
}

export async function removeBasketProductById(productId: string) {
  const headers = await getAuthHeaders(); 

  const res = await fetch(`${API_BASE}/delete/${productId}`, {
    method: "DELETE",
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Couldn't remove from Basket: ${res.status} – ${error}`);
  }

  revalidatePath("/", "layout");
  revalidatePath("/cart");
}


export async function removeAllBasketProducts() {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_BASE}/products`, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Couldn't fetch basket to clear it");
  }

  const data = await res.json();

  const items = data.content || [];

  for (const item of items) {
    await fetch(`${API_BASE}/delete/${item.id}`, {
      method: "DELETE",
      headers,
      cache: "no-store",
    });
  }

  revalidatePath("/", "layout");
  revalidatePath("/cart");
}


export async function getBasketProducts() {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_BASE}/products`, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  if (!res.ok) return [];
  return await res.json();
}


