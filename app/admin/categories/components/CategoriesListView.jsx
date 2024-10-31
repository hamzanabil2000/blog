"use client";

import { useCategories } from "@/lib/firebase/category/read";
import Link from "next/link";
import React from "react";

export default function CategoriesListView() {
  const { data, error, isLoading } = useCategories();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!data) {
    return <h1>Data not found!</h1>;
  }

  return (
    <section>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-blue-50">Sr.</th>
            <th className="border px-4 py-2 bg-blue-50">Icon</th>
            <th className="border px-4 py-2 bg-blue-50">Name</th>
            <th className="border px-4 py-2 bg-blue-50">Slug</th>
            <th className="border px-4 py-2 bg-blue-50">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2">
                <img
                  className="h-10 justify-self-center"
                  src={item?.iconURL}
                  alt={item?.name || "Icon"}
                />
              </td>
              <td className="border px-4 py-2 text-center">{item?.name}</td>
              <td className="border px-4 py-2 text-center">{item?.slug}</td>
              <td className="border px-4 py-2 text-center">
                <Link href={`/admin/categories/form?id=${item?.id}`}>
                  <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                    Action
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
