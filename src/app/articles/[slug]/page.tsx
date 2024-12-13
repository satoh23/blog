import markdownHtml from "zenn-markdown-html";

import { Article, Category } from "@/types";
import { fetchDetailArticle } from "@/utils/articles";
import DetailArticle from "@/app/components/DetailArticle";

const Detail = async (props: { params: Promise<{ slug: string }> }) => {
  const slug: string = (await props.params).slug;
  const detailArticle: Article = await fetchDetailArticle(slug);
  const belongCategories: Category[] = detailArticle.belong_categories;
  const html = markdownHtml(detailArticle.content);

  return (
    <DetailArticle
      detailArticle={detailArticle}
      belongCategories={belongCategories}
      html={html}
    />
  );
};

export default Detail;
