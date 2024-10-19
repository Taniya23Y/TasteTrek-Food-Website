import React, { useEffect } from "react";
import DataTable from "../dataStore/DataTable";
import { HiCurrencyRupee } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getAllProducts } from "../../api";
import { alertNULL, alertSuccess } from "../../context/actions/alertActions";
import { setAllProducts } from "../../context/actions/productActions";
import Swal from "sweetalert2"; // Import SweetAlert2
import withReactContent from "sweetalert2-react-content"; // For React integration
import "../../index.css";

const MySwal = withReactContent(Swal); // Initialize SweetAlert2 with React

const DBItems = () => {
  const products = useSelector((state) => state.products || []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data || []));
      });
    }
  }, [dispatch, products]);

  const handleDelete = (rowData) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      customClass: {
        popup: "my-custom-popup", // You can define custom CSS classes
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAProduct(rowData.productId).then(() => {
          dispatch(alertSuccess("Product Deleted"));
          setTimeout(() => {
            dispatch(alertNULL());
          }, 3000);
          getAllProducts().then((data) => {
            dispatch(setAllProducts(data || []));
          });

          Swal.fire("Deleted!", "The product has been deleted.", "success");
        });
      }
    });
  };

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
            onClick: (event, rowData) => handleDelete(rowData),
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
