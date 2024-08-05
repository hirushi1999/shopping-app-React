import React from "react";

const HomeCard = ({ name, image, category, price }) => {
  return (
    <div className="font-sans bg-white p-2 rounded shadow-md">
      <div className="w-40 min-h-[100px]">
        {/* <h3>{name}</h3> */}
        <img src={image} className="w-full" />
      </div>
      <h3 className="font-semibold text-slate-600 text-center capitalize text-base">
        {name}
      </h3>
      <p className="text-center text-slate-500 font-medium">{category}</p>
      <p className="text-center font-bold">
        <span className="text-red-500">Rs.</span>
        <span>{price}</span>
      </p>
    </div>
  );
};

export default HomeCard;
