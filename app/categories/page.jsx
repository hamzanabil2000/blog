import { getAllCategories } from "@/lib/firebase/category/read_server";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const categories = await getAllCategories();

  return (
    <main className="p-10">
      <section className="grid grid-cols-5">
        {categories.map((category, index) => {
          return <CategoryCard category={category} key={index} />;
        })}
      </section>
    </main>
  );
}

function CategoryCard({ category }) {
  return (
    <Link href={`/categories/${category?.id}`}>
      <div
        className="flex flex-col items-center justify-center gap-2 hover:bg-blue-50 rounded xl p-6"
        key={category.id || category.name}
      >
        <img
          className="h-28 w-28 object-cover rounded-full "
          src={category?.iconURL}
          alt=""
        />
        <h1 className="font-bold">{category?.name}</h1>
      </div>
    </Link>
  );
}
