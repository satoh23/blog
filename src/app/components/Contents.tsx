import { TableOfContent } from "@/types";

import { load } from "cheerio";

type ContentsProps = {
  html: string;
};

const Contents = async ({ html }: ContentsProps) => {
  const $ = load(html);

  const tableOfContent: TableOfContent[] = [];
  $("h2, h3").each((index, element) => {
    const level = $(element).prop("tagName")?.toLowerCase();
    const title = $(element).text().trim();
    const href = $(element).find("a").attr("href");
    if (level !== undefined && href !== undefined) {
      const record = { level: level, title: title, href: href };
      tableOfContent.push(record);
    }
  });

  return (
    <aside className="w-full md:w-1/4 lg:flex flex-col items-center hidden">
      <div className="mt-10 fixed w-1/4 pl-16">
        <div className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950 px-1">
          目次
        </div>
        <ul className="mt-2 pl-1.5 text-sm">
          {tableOfContent.map((content: TableOfContent) => (
            <li
              className="py-1.5 hover:bg-amber-200 hover:text-amber-950"
              key={content.href}
            >
              {content.level == "h2" ? (
                <a href={content.href} className="line-clamp-2">
                  {content.title}
                </a>
              ) : (
                <a href={content.href} className="ml-3 line-clamp-2">
                  {content.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Contents;
