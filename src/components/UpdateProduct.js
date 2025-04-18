import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../reducers/productsSlice";

const UpdateProduct = ({ product, onFinishEdit }) => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(product);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productData));
    onFinishEdit();
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; // для обработки гребаного чекбокса
    setProductData({ ...productData, [e.target.name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={productData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        min="0"
        name="price"
        value={productData.price}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="available"
        title="Доступен для заказа"
        checked={productData.available}
        onChange={handleChange}
      />
      <button type="submit">Сохранить изменения</button>
    </form>
  );
};

export default UpdateProduct;