import React, { useEffect } from "react";
import Card from "../components/Card";
// import { useAuthContext } from "../hooks/useAuthContext";
import { useItemsContext } from "../hooks/useItemsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SortItems from "../components/SortItems";

const Items = () => {
  const { items, dispatch } = useItemsContext();
  // const { user } = useAuthContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };

    fetchItems();
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="bg-[#F0F0F0]">
        <div class="bg-white">
          <div>
            <div
              class="fixed inset-0 flex z-40 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="fixed inset-0 bg-black bg-opacity-25"
                aria-hidden="true"
              ></div>
            </div>

            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                  Items
                </h1>

                <div class="flex items-center">
                  <SortItems />
                  <button
                    type="button"
                    class="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  >
                    <span class="sr-only">Filters</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <section class="pt-6 pb-24">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                  <form class="hidden lg:block">
                    <div class="border-b border-gray-200 py-6">
                      <h3 class="-my-3 flow-root">
                        <button
                          type="button"
                          class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-0"
                          aria-expanded="false"
                        >
                          <span class="font-medium text-gray-900"> Color </span>
                          <span class="ml-6 flex items-center">
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div class="pt-6" id="filter-section-0">
                        <div class="space-y-4">
                          <div class="flex items-center">
                            <input
                              id="filter-color-0"
                              name="color[]"
                              value="white"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-color-0"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              White{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-color-1"
                              name="color[]"
                              value="beige"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-color-1"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Beige{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-color-2"
                              name="color[]"
                              value="blue"
                              type="checkbox"
                              checked
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-color-2"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Blue{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-color-3"
                              name="color[]"
                              value="brown"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-color-3"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Brown{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-color-4"
                              name="color[]"
                              value="green"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-color-4"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Green{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-color-5"
                              name="color[]"
                              value="purple"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-color-5"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Purple{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="border-b border-gray-200 py-6">
                      <h3 class="-my-3 flow-root">
                        <button
                          type="button"
                          class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-1"
                          aria-expanded="false"
                        >
                          <span class="font-medium text-gray-900">
                            {" "}
                            Category{" "}
                          </span>
                          <span class="ml-6 flex items-center">
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div class="pt-6" id="filter-section-1">
                        <div class="space-y-4">
                          <div class="flex items-center">
                            <input
                              id="filter-category-0"
                              name="category[]"
                              value="new-arrivals"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-category-0"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              New Arrivals{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-category-1"
                              name="category[]"
                              value="sale"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-category-1"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Sale{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-category-2"
                              name="category[]"
                              value="travel"
                              type="checkbox"
                              checked
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-category-2"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Travel{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-category-3"
                              name="category[]"
                              value="organization"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-category-3"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Organization{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-category-4"
                              name="category[]"
                              value="accessories"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-category-4"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              Accessories{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="border-b border-gray-200 py-6">
                      <h3 class="-my-3 flow-root">
                        <button
                          type="button"
                          class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-2"
                          aria-expanded="false"
                        >
                          <span class="font-medium text-gray-900"> Size </span>
                          <span class="ml-6 flex items-center">
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div class="pt-6" id="filter-section-2">
                        <div class="space-y-4">
                          <div class="flex items-center">
                            <input
                              id="filter-size-0"
                              name="size[]"
                              value="2l"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-size-0"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              2L{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-size-1"
                              name="size[]"
                              value="6l"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-size-1"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              6L{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-size-2"
                              name="size[]"
                              value="12l"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-size-2"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              12L{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-size-3"
                              name="size[]"
                              value="18l"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-size-3"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              18L{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-size-4"
                              name="size[]"
                              value="20l"
                              type="checkbox"
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-size-4"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              20L{" "}
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              id="filter-size-5"
                              name="size[]"
                              value="40l"
                              type="checkbox"
                              checked
                              class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-size-5"
                              class="ml-3 text-sm text-gray-600"
                            >
                              {" "}
                              40L{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div class="lg:col-span-3">
                    <div class="grid md:grid-cols-3 p-2 gap-4 lg:h-full">
                      {items &&
                        items.map((item) => (
                          <Card key={item._id} item={item} />
                        ))}
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Items;
