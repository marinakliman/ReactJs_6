import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productsSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    setProductData({ name: "", description: "", price: 0, available: false });
  };

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleChange}
        placeholder="Название продукта"
      />
      <input
        type="text"
        name="description"
        value={productData.description}
        onChange={handleChange}
        placeholder="Описание продукта"
      />
      <input
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        title="Цена"
      />
      <button type="submit">Добавить продукт</button>
    </form>
  );
};

export default AddProduct;