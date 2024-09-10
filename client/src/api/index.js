import axios from "axios";

export const baseURL =
  "http://127.0.0.1:5001/tastetrek-food-website-96c46/us-central1/app";

export const validateUserJWTToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtVerification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// create add new product
export const addNewProduct = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/products/create`, { ...data });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// get all the products
export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/all`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// delete a product
export const deleteAProduct = async (productId) => {
  try {
    const res = await axios.delete(
      `${baseURL}/api/products/delete/${productId}`
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// get all users
// export const getAllUsers = async () => {
//   try {
//     const res = await axios.get(`${baseURL}/api/users/all`);
//     return res.data.data;
//   } catch (err) {
//     return null;
//   }
// };

// Get all users function
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/users/all`);
    // Check if response data exists and return it, otherwise return an empty array
    return res.data.data || [];
  } catch (err) {
    console.error("Error fetching users:", err);
    // Always return a promise with an empty array in case of an error
    return [];
  }
};
