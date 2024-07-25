// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Card({ productName ,price,category,desc,onsale ,DeleteProduct,index,changeCount ,count}) {
  // const [count, setcount] = useState(0);
  // const [user, setuser] = useState("");
  // function changeCount() {
  //   setcount(Math.random());
  // }
  // function changeUser() {
  //   setuser("ahmed");
  // }
  // useEffect(() => {
  //   if (count == 0) {
  //     // return console.log('count update');
  //   }
  // }, [productName]);
  // console.log(props);
  return (
    <>
      <div className="col-span-1 p-4  rounded-lg bg-stone-200 relative flex flex-col justify-between ">
        {onsale ? (
          <span className=" bg-yellow-400 rounded-full p-2 z-10 m-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            sale !
          </span>
        ) : (
          ""
        )}
        <h1 className="border-neutral-700 border-b-2 py-2 ">
          name: {productName}{" "}
        </h1>
        <ul>
          <li>price:{price}</li>
          <li>category:{category}</li>
          <li>{desc}</li>
        </ul>
        <div className="flex justify-center items-center ">
        <button onClick={()=>{ changeCount(index, count + 1)}} className="bg-yellow-300 border border-yellow-600 rounded-full text-white w-5 h-5 flex items-center justify-center">+</button>
        <h5 className="mx-2">{count}</h5>
            <button onClick={()=>{ changeCount(index, count - 1)}}  className="bg-yellow-300 border border-yellow-600  rounded-full text-white w-5 h-5 flex items-center justify-center">-</button>
            </div>
        {/* <h1>{count}</h1>
        <h1>{user}</h1> */}
        <div className="flex justify-between content-stretch">
          <button
            className="bg-transparent text-red-600 rounded-lg p-1 border-red-900 border hover:bg-red-400 hover:text-white"
            onClick={() => {
              // changeCount;
              DeleteProduct(index)
            }}
          >
            {/* {" "} */}
            Delete
          </button>

          <button
            className="bg-transparent text-blue-600 rounded-lg p-1 border-blue-900 border hover:bg-blue-400 hover:text-white"
          >
           Update
          </button>
        </div>
      </div>
    </>
  );
}
