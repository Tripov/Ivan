"use client";
import { DashboardSidebar } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatCategoryName } from "../../../../../utils/categoryFormating";
import { convertCategoryNameToURLFriendly } from "../../../../../utils/categoryFormating";

interface DashboardSingleCategoryProps {
  params: { id: number };
}

const DashboardSingleCategory = ({
  params: { id },
}: DashboardSingleCategoryProps) => {
  const [categoryInput, setCategoryInput] = useState<{ name: string }>({
    name: "",
  });
  const router = useRouter();

  const deleteCategory = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    // Отправка запроса на удаление категории
    fetch(`http://localhost:3001/api/categories/${id}`, requestOptions)
      .then((response) => {
        if (response.status === 204) {
          toast.success("Категория успешно удалена");
          router.push("/admin/categories");
        } else {
          throw Error("Произошла ошибка при удалении категории");
        }
      })
      .catch(() => {
        toast.error("Произошла ошибка при удалении категории");
      });
  };

  const updateCategory = async () => {
    if (categoryInput.name.length > 0) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: convertCategoryNameToURLFriendly(categoryInput.name),
        }),
      };
      // Отправка запроса на обновление категории
      fetch(`http://localhost:3001/api/categories/${id}`, requestOptions)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw Error("Ошибка при обновлении категории");
          }
        })
        .then(() => toast.success("Категория успешно обновлена"))
        .catch(() => {
          toast.error("Произошла ошибка при обновлении категории");
        });
    } else {
      toast.error("Для обновления категории введите её название");
    }
  };

  useEffect(() => {
    // Получение данных о категории
    fetch(`http://localhost:3001/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryInput({
          name: data?.name,
        });
      });
  }, [id]);

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:pl-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Детали категории</h1>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Название категории:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={formatCategoryName(categoryInput.name)}
              onChange={(e) =>
                setCategoryInput({ ...categoryInput, name: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex gap-x-2 max-sm:flex-col">
          <button
            type="button"
            className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
            onClick={updateCategory}
          >
            Обновить категорию
          </button>
          <button
            type="button"
            className="uppercase bg-red-600 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2"
            onClick={deleteCategory}
          >
            Удалить категорию
          </button>
        </div>

        <p className="text-xl text-error max-sm:text-lg">
          Внимание: при удалении этой категории будут удалены все товары, связанные с ней.
        </p>
      </div>
    </div>
  );
};

export default DashboardSingleCategory;
