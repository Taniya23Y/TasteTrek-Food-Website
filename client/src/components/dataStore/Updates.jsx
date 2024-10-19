import React from "react";
import { UpdatesData } from "../../assets/icons";

const Updates = () => {
  return (
    <div className="Updates w-[85%] bg-white rounded-lg p-[1rem] flex flex-col text-[13px] gap-[1rem]">
      {UpdatesData.map((update) => {
        return (
          <div className="update flex gap-[0.5rem]">
            <img
              src={update.img}
              alt="profile"
              className="w-[3.2rem] h-[3.2rem] rounded-full"
            />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span className="font-bold">{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
