export async function fetchAllArticles(id?: string) {
  const url: string = id
    ? process.env.ORIGIN + `/api/articles?categoryId=${id}`
    : process.env.ORIGIN + `/api/articles`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.articles;
}

export async function fetchDetailArticle(slug: string) {
  const res = await fetch(process.env.ORIGIN + `/api/articles/${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.article;
}
