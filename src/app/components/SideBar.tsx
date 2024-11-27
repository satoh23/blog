import Profile from "./Profile";
import CategoryList from "./CategoryList";

import { Category } from "@/types";

type CategoryProps = {
  categories: Category[];
};

const SideBar = ({ categories }: CategoryProps) => {
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
      <Profile />
      <CategoryList categories={categories} />
    </aside>
  );
};

export default SideBar;
