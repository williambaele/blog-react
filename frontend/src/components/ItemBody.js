import React from "react";

const ItemBody = ({ item, userItem }) => {
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div>
      <div class="mx-auto py-10 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div class="flex flex-col-reverse">
            <div class="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div
                class="grid grid-cols-4 gap-6"
                aria-orientation="horizontal"
                role="tablist"
              >
                <button
                  id="tabs-1-tab-1"
                  class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                >
                  <span class="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src="https://www.sneakers.fr/wp-content/uploads/2018/06/nike-air-max-1-parra-2018-1.jpg"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
              <div className="w-full mt-16">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img
                      src="https://www.booska-p.com/wp-content/uploads/2022/10/hasbulla.jpg"
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-lg">{userItem}</p>
                  </div>
                  <div className="grid">
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p class="mt-0.5 text-xs text-gray-500">
                      Based on 48 reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full aspect-w-1 aspect-h-1">
              <div
                id="tabs-1-panel-1"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabindex="0"
              >
                <img
                  src="https://www.sneakers.fr/wp-content/uploads/2018/06/nike-air-max-1-parra-2018-1.jpg"
                  alt="Angled front view with bag zipped and handles upright."
                  class="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>
            </div>
          </div>

          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
              {item.title}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">{item.price} €</p>
            </div>

            <div class="mt-6">
              <div class="text-base text-gray-700 space-y-6">
                <p>{item.description}</p>
              </div>
            </div>

            <div class="mt-6 space-y-4 md:grid md:grid-cols-2">
              <div>
                <h3 class="text-md text-gray-600 mb-2">Color</h3>
                <div class="flex items-center space-x-3">
                  {item.colors.map((color) => (
                    <div title={color} className={`rounded-full h-6 w-6 bg-${color}-600`}>
                    </div>
                  ))}
                </div>

              </div>
              <div>
                <h3 class="text-md text-gray-600 mb-2">Size</h3>
                <div class="flex items-center space-x-3">
                  <p>{item.size}</p>
                </div>
              </div>
              <div>
                <h3 class="text-md text-gray-600 mb-2">State</h3>
                <div class="flex items-center space-x-3">
                  <p>{capitalizeWords(item.state)}</p>
                </div>
              </div>
              <div>
                <h3 class="text-md text-gray-600 mb-2">Brand</h3>
                <div class="flex items-center space-x-3">
                  <p>{capitalizeWords(item.brand)}</p>
                </div>
              </div>
            </div>

            <div class="mt-10 flex sm:flex-col1">
              <button
                type="submit"
                class="max-w-xs flex-1 bg-[#F45050] hover:bg-[#f56262] border border-transparent rounded-md px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none sm:w-full"
              >
                Contact the seller
              </button>

              <button
                type="button"
                class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  class="h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>

            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">
                Additional details
              </h2>

              <div class="border-t divide-y divide-gray-200">
                <div>
                  <div class="space-y-2 divide-y divide-gray-200">
                    <details
                      class="group p-6 [&_summary::-webkit-details-marker]:hidden"
                      open
                    >
                      <summary class="flex items-center justify-between cursor-pointer">
                        <h2 class="font-medium text-gray-900">Sizing</h2>

                        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>

                    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden mt-2">
                      <summary class="flex items-center justify-between cursor-pointer">
                        <h2 class="font-medium text-gray-900">Return</h2>

                        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>
                    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden mt-2">
                      <summary class="flex items-center justify-between cursor-pointer">
                        <h2 class="font-medium text-gray-900">Price</h2>

                        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBody;
