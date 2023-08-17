import React from "react";
import ClientComp from "./clientComp";

async function productlist() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Product2() {
  //server component Api integration
  let product = await productlist();
  return (
    <div>
      {product.map((item) => (
        <div>
          <h2>{item.title}</h2>
      <ClientComp/>
        </div>
      ))}
    </div>
  );
}
