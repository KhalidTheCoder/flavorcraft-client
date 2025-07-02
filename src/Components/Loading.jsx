import React from "react";

const Loading = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="flex justify-center items-center p-20"
    >
      <span className="loading loading-infinity loading-xl"></span>
    </div>
  );
};

export default Loading;