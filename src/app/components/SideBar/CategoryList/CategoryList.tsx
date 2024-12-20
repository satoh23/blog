import Image from "next/image";

import { Category } from "@/types";
import Link from "next/link";

type CategoryProps = {
  categories: Category[];
};

const CategoryArea = ({ categories }: CategoryProps) => {
  return (
    <div className="rounded p-4 mt-4 w-full">
      <div className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950">
        カテゴリー
      </div>
      <ul className="mt-3 pl-2">
        {categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <li className="hover:bg-amber-200 hover:text-amber-950">
              <Image
                src={category.icon}
                alt={category.name}
                width={13}
                height={13}
                className="inline-block mr-1 pb-1"
              />
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryArea;
