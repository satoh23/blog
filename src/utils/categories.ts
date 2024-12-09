export async function fetchAllCategories() {
  const res = await fetch(process.env.ORIGIN + `/api/categories`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.categories;
}
