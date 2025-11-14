import React from 'react';

function Cards({ item }) {
  return (
    <div className="mt-4 my-4 ml-6">
    <div className="card bg-base-100 w-100  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border mx-auto">
      <figure>
        <img
          src={item.image}
          alt="books"
          className="w-full h-56 object-cover rounded-t-xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {item.name}
          <div className="badge badge-secondary ml-2">{item.category}</div>
        </h2>

        <p className="text-gray-600 text-sm">
          {item.title}
        </p>

        <div className="card-actions justify-between mt-3">
          <div className="badge badge-outline">${item.price}</div>
          <button className="cursor-pointer badge badge-outline hover:bg-pink-500 hover-text-white duration-200 px-2 py-1 rounded-full  border-2">Buy Now</button>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Cards;
