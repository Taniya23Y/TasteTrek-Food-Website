import React, { useState } from "react";
import { statuses } from "../../utils/styles";
import Spinner from "../Spinner";
import { FaCloudUploadAlt, MdDelete } from "../../assets/icons";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  alertDanger,
  alertNULL,
  alertSuccess,
} from "../../context/actions/alertActions";
import { motion } from "framer-motion";
import { buttonClick } from "../../animations";
import { addNewProduct, getAllProducts } from "../../api";
import { setAllProducts } from "../../context/actions/productActions";

const DBNewItems = () => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const [imageDownloadURL, setImageDownloadURL] = useState(null);

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  // uploadImage function
  const uploadImage = (e) => {
    setIsLoading(true);

    // file information from the targeted file
    const imageFile = e.target.files[0];

    // console.log(imageFile);

    //* upload image to firebase storage

    // const storage = getStorage();
    // create a root reference
    const storageRef = ref(storage, `Images/${Date.now()}_${imageFile.name}`);

    // upload task
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    //* create Three (3) methods
    //* -> 1) snapshot
    //* -> 2) Error
    //* -> 3) DownloadURL

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        dispatch(alertDanger(`Error : ${error}`));
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageDownloadURL(downloadURL);
          setIsLoading(false);
          setProgress(null);
          dispatch(alertSuccess("Image Uploaded to the cloud"));
          setTimeout(() => {
            dispatch(alertNULL());
          }, 3000);
        });
      }
    );
  };

  // deleteImageFromFirebase
  const deleteImageFromFirebase = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageDownloadURL);

    deleteObject(deleteRef).then(() => {
      setImageDownloadURL(null);
      setIsLoading(false);
      dispatch(alertSuccess("Image removed from the cloud"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };

  // submitNewData
  const submitNewData = () => {
    const data = {
      product_name: itemName,
      product_category: category,
      product_price: price,
      imageURL: imageDownloadURL,
    };
    console.log(data);
    addNewProduct(data).then((res) => {
      console.log(res);
      dispatch(alertSuccess("New Item added"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
      setImageDownloadURL(null);
      setItemName("");
      setPrice("");
      setCategory(null);
    });
    getAllProducts().then((data) => {
      dispatch(setAllProducts(data));
    });
  };

  return (
    <div className="flex items-center justify-center flex-col pt-4 px-4 w-full">
      <h1 className="px-3 py-2">Add New Items</h1>
      <div className="border border-gray-300 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">
        <InputValueFiled
          type="text"
          placeholder={"Item name here"}
          stateFunction={setItemName}
          stateValue={itemName}
        />
        <div className="w-full flex flex-wrap items-center justify-around gap-3 ">
          {statuses &&
            statuses?.map((data) => (
              <p
                key={data.id}
                onClick={() => setCategory(data.category)}
                className={`px-4 py-3 rounded-md text-[1.5rem] text-textColor font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md ${
                  data.category === category
                    ? "bg-[#FEBD2E] text-primary"
                    : "bg-transparent"
                }`}
              >
                {data.title}
              </p>
            ))}
        </div>
        <InputValueFiled
          type="number"
          placeholder={"Item price here"}
          stateFunction={setPrice}
          stateValue={price}
        />
        <div className="w-full bg-card backdrop-blur-md h-370 rounded-md border-2 border-dotted border-gray-300 cursor-pointer">
          {isLoading ? (
            <div className="w-full h-full flex flex-col items-center justify-evenly px-24">
              <Spinner />
              {/* {progress} */}
              {Math.round(progress > 0) && (
                <div className=" w-full flex flex-col items-center justify-center gap-2">
                  <div className="flex justify-between w-full">
                    <span className="text-base font-medium text-textColor">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-textColor">
                      {Math.round(progress) > 0 && (
                        <>{`${Math.round(progress)}%`}</>
                      )}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#FEBD2E] h-2.5 rounded-full transition-all duration-300 ease-in-out"
                      style={{
                        width: `${Math.round(progress)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {!imageDownloadURL ? (
                <>
                  <label>
                    <div className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <p className="font-bold text-4xl">
                          <FaCloudUploadAlt className="-rotate-0" />
                        </p>
                        <p className="text-lg text-textColor">
                          Click to upload image.
                        </p>
                      </div>
                    </div>

                    <input
                      type="file"
                      name="upload-image"
                      accept="image/*"
                      onChange={uploadImage}
                      className=" w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      src={imageDownloadURL}
                      className=" w-full h-full object-cover"
                    />

                    <motion.button
                      {...buttonClick}
                      type="button"
                      className="absolute top-3 right-3 p-3 rounded-full bg-[#FEBD2E] text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={() => deleteImageFromFirebase(imageDownloadURL)}
                    >
                      <MdDelete className="-rotate-0" />
                    </motion.button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {/* save button */}
        <motion.button
          onClick={submitNewData}
          {...buttonClick}
          className="w-9/12 py-2 rounded-md bg-[#f4b221] text-primary hover:bg-[#ECAB20] cursor-pointer"
        >
          Save
        </motion.button>
      </div>
    </div>
  );
};

// internal components
export const InputValueFiled = ({
  type,
  placeholder,
  stateValue,
  stateFunction,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-[#FEBD2E]"
        value={stateValue}
        onChange={(e) => stateFunction(e.target.value)}
      />
    </>
  );
};
export default DBNewItems;
