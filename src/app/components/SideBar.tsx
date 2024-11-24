import React from "react";
import Profile from "./Profile";
import CategoryArea from "./CategoryArea";

import { Category } from "@/types";

type CategoryProps = {
  categories: Category[];
};

const SideBar = ({ categories }: CategoryProps) => {
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
      <Profile />
      <CategoryArea categories={categories} />
    </aside>
  );
};

export default SideBar;