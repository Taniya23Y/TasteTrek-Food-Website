import React, { useEffect } from "react";
import DataTable from "../dataStore/DataTable";
import { HiCurrencyRupee } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getAllProducts } from "../../api";
import { alertNULL, alertSuccess } from "../../context/actions/alertActions";
import { setAllProducts } from "../../context/actions/productActions";

const DBItems = () => {
  const products = useSelector((state) => state.products || []); // Default to empty array
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data || [])); // Ensure data is an array
      });
    }
  }, [dispatch, products]);

  return (
    <div className="flex items-center justify-center gap-4 pt-6 w-full px-4">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-17 object-cover rounded-lg"
                alt="Product"
              />
            ),
          },
          { title: "Name", field: "product_name" },
          { title: "Category", field: "product_category" },
          {
            title: "Price",
            field: "product_price",
            render: (rowData) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center">
                <HiCurrencyRupee className="text-[#FEBD2E]" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Data",
            onClick: (event, rowData) => {
              alert("You want to edit " + rowData.productId);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Data",
            onClick: (event, rowData) => {
              if (
                window.confirm("Are you sure, you want to perform this action")
              ) {
                deleteAProduct(rowData.productId).then(() => {
                  dispatch(alertSuccess("Product Deleted"));
                  setTimeout(() => {
                    dispatch(alertNULL());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data || []));
                  });
                });
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
