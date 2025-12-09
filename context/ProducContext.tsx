// ProductsContext.tsx
import React, { createContext, useContext, useState } from "react";
import { Product } from "../types/Product";
import { PRODUCTS } from "../data/product-items";

type ProductsContextType = {
  productsContext: Product[];
  addProduct: (product: Product) => void;
};

const ProductsContext = createContext<ProductsContextType>({
  productsContext: [],
  addProduct: () => {},
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <ProductsContext.Provider value={{ productsContext: products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
