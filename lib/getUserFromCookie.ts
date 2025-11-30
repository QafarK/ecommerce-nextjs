import { cookies } from "next/headers";

export async function getUserToken(): Promise<string | null> {
  const cookieStore = await cookies();    
  return cookieStore.get("token")?.value ?? null;
}