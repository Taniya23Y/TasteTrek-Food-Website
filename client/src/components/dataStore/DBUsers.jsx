import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../api";
import { setAllUserDetails } from "../../context/actions/allUsersAction";
import DataTable from "./DataTable";
import Avatar from "react-nice-avatar";

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className="flex items-center justify-center gap-4 pt-6 w-full overflow-x-auto scrollbar">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "photoURL",
            render: (rowData) =>
              rowData.photoURL ? (
                <img
                  src={rowData.photoURL}
                  className="w-16 h-16 object-contain rounded-full"
                  alt="profileImg"
                />
              ) : (
                <Avatar className="w-16 h-16 object-contain rounded-full text-3xl" />
              ),
          },
          {
            title: "Name",
            field: "displayName",
          },
          {
            title: "Email",
            field: "email",
          },
          {
            title: "Verified",
            field: "emailVerified",
            render: (rowData) => (
              <p
                className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
                  rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"
                }`}
              >
                {rowData.emailVerified ? "Verified" : "Not Verified"}
              </p>
            ),
          },
        ]}
        // data={allUsers}
        // data={() => allUsers} // Providing data as a function
        data={allUsers || []} // Fallback to an empty array if allUsers is null
        title="List of Users"
      />
    </div>
  );
};

export default DBUsers;
