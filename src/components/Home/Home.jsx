// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Card from "../Card";
import Swal from "sweetalert2";

export function Home() {
  const [product, SetProducts] = useState([
    {
      productName: "Samsung Galaxy S21",
      price: "999",
      category: "mobile",
      desc: "High-performance smartphone with excellent camera",
      onsale: true,
      count: 2,
    },
    {
      productName: "Apple iPhone 13",
      price: "1099",
      category: "mobile",
      desc: "Latest iPhone model with advanced features",
      onsale: false,
      count: 2,
    },
    {
      productName: "Dell XPS 13",
      price: "1499",
      category: "laptop",
      desc: "Compact and powerful laptop for professionals",
      onsale: true,
      count: 2,
    },
    {
      productName: "Sony WH-1000XM4",
      price: "349",
      category: "headphones",
      desc: "Noise-canceling over-ear headphones with superior sound",
      onsale: false,
      count: 2,
    },
    {
      productName: "Bose SoundLink Revolve+",
      price: "299",
      category: "speaker",
      desc: "Portable Bluetooth speaker with 360-degree sound",
      onsale: true,
      count: 2,
    },
    {
      productName: "Apple MacBook Air M1",
      price: "999",
      category: "laptop",
      desc: "Lightweight laptop with M1 chip for high performance",
      onsale: false,
      count: 2,
    },
    {
      productName: "Google Pixel 6",
      price: "599",
      category: "mobile",
      desc: "Android smartphone with great camera and software",
      onsale: true,
      count: 2,
    },
    {
      productName: "Amazon Echo Dot",
      price: "49",
      category: "smart home",
      desc: "Compact smart speaker with Alexa",
      onsale: false,
      count: 2,
    },
    {
      productName: "Fitbit Charge 5",
      price: "179",
      category: "fitness",
      desc: "Advanced fitness tracker with health monitoring",
      onsale: true,
      count: 2,
    },
    {
      productName: "LG OLED55CXPUA",
      price: "1399",
      category: "television",
      desc: "55-inch OLED TV with stunning picture quality",
      onsale: false,
      count: 2,
    },
  ]);
  useEffect(()=>{
    console.log('mount');
  } ,[])
  useEffect(()=>{
    console.log('update ');
  })
  function DeleteProduct(index) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          }).then(()=>{
            // // console.log(index);
          // //deep copy of array
          let copyOfProducts = [...product];
          // // update datat in copy
          copyOfProducts.splice(index, 1);
          // //use use state to get the updated data
          SetProducts(copyOfProducts);
          })
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  }
  function changeCount(index, count) {
    if (count == 0) {
      DeleteProduct(index);
    } else {
      let copyOfProducts = [...product];
      copyOfProducts[index].count = count;
      SetProducts(copyOfProducts);
    }
  }
  return (
    <>
    <div className="flex justify-center space-x-4 p-6 bg-gray-100 rounded-lg shadow-md">
  <p className="text-indigo-700 bg-white p-4 rounded-full border border-indigo-300 shadow-sm flex items-center">
    <span className="font-medium text-lg">Mobile</span>
  </p>
  <p className="text-pink-700 bg-white p-4 rounded-full border border-pink-300 shadow-sm flex items-center">
    <span className="font-medium text-lg">Data</span>
  </p>
</div>

    <div className="container mx-auto p-8 mt-8 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white p-6 rounded-lg shadow-md gap-6">
        {product.map((product, index) => {
          return (
            <Card
              {...product}
              key={index}
              DeleteProduct={DeleteProduct}
              index={index}
              changeCount={changeCount}
            />
          );
        })}
      </div>
    </div>
  </>
  
  );
}
