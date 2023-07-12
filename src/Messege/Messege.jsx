import React from "react";
import person from "../../public/Image/person.jpg";

const Messege = () => {
  return (
    <div className="bg-[#173931] mt-10 p-9">
      <div className="flex justify-center items-center  gap-20">
        <img src={person} className="h-[250px] transition -rotate-12" alt="" />

        <p className="text-white text-2xl w-1/2 ">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue.
          <hr className="border border-red-600 my-7" />
          <p className="text-base">Andrew Yako</p>
          <p className="text-base">Coach of Football Academy</p>
        </p>
      </div>
    </div>
  );
};

export default Messege;
