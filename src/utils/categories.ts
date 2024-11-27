export async function fetchAllCategories() {
  const res = await fetch(process.env.ORIGIN + `/api/categories`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const data = await res.json();
  return data.categories;
}
