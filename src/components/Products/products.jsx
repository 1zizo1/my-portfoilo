/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Products({ title, imageCover, category, price, description, quantity }) {
  return (
    <>
      <div className="col-span-1 p-4 my-5 rounded-lg bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-lg relative flex flex-col justify-between">
        <h2 className="text-indigo-700 font-bold text-xl mb-2">{title}</h2>
        <img className="w-full rounded-lg mb-2" src={imageCover} alt={title} />
        <h5 className="text-indigo-600 font-semibold text-lg mb-1">${price}</h5>
        <h5 className="text-indigo-500 font-medium text-md mb-1">{category.name}</h5>
        <p className="text-gray-700 mb-3">{description}</p>
        <h1 className="text-indigo-700 font-bold">{quantity} in stock</h1>
      </div>
    </>
  );
}
