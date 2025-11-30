export async function registerUser(firstname: string, lastname: string, email: string, password: string) {
  const res = await fetch("https://ilkinibadov.com/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstname, lastname, email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return await res.json();
}
