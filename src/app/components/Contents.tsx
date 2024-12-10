import { TableOfContent } from "@/types";

import { load } from "cheerio";

type ContentsProps = {
  html: string;
};

const heading = (level: string, title: string) => {
  if (level === "h2") {
    return <li className="font-extrabold">▪︎ {title}</li>;
  } else if (level === "h3") {
    return <li className="ml-2 text-amber-800">・{title}</li>;
  } else if (level === "h4") {
    return <li className="ml-6 text-amber-800 opacity-70">- {title}</li>;
  }
};

const Contents = async ({ html }: ContentsProps) => {
  const $ = load(html);

  const tableOfContent: TableOfContent[] = [];
  $("h2, h3, h4").each((index, element) => {
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
      <div className="mt-10 ml-5 sticky top-5">
        <div className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950 px-1">
          目次
        </div>
        <ul className="mt-2 pl-1.5 text-sm">
          {tableOfContent.map((content: TableOfContent) => (
            <a
              href={content.href}
              key={content.href}
              className="line-clamp-2 py-1.5 hover:bg-amber-200 hover:text-amber-950"
            >
              {heading(content.level, content.title)}
            </a>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Contents;
