import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";



function Product() {
  
  const {allProducts} = useContext(ShopContext);
  const {prodId} = useParams();

  const product = allProducts.find((e) => e.id === Number(prodId));

  return <div>
  <Breadcrumb product={product}/>
  <ProductDisplay product={product}/>
  <DescriptionBox />
  <RelatedProducts/>
  </div>;
}

export default Product;
