import './styles/my_style.css'
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="title">
          Приложение для управления каталогом продуктов
        </div>
        <div className="content">
          <div className="product_form">
            <AddProduct />
          </div>
          <div className="product_list">
            <ProductList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;