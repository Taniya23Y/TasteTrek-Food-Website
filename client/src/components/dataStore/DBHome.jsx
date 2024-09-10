import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../api";
import { setAllProducts } from "../../context/actions/productActions";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return <div className="text-black">DBHome</div>;
};

export default DBHome;
