import React from "react";
import Image from "next/image";

import { Category } from "@/types";
import Link from "next/link";

type CategoryProps = {
  categories: Category[];
};

const CategoryArea = ({ categories }: CategoryProps) => {
  return (
    <div className="rounded p-4 mt-4 w-full">
      <h3 className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950">
        カテゴリー
      </h3>
      <ul className="mt-3 pl-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="hover:bg-amber-200 hover:text-amber-950"
          >
            <Link href="#">
              <Image
                src="/next.svg"
                // src={category.icon}
                alt=""
                width={13}
                height={13}
                className="inline-block mr-1 pb-1"
              />
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryArea;
