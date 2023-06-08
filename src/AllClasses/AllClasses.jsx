import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SingleCls from "./SingleCls";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    axiosSecure("/sportsAcademy")
    .then(res => {
        console.log('all data', res.data)
        setAllClasses(res.data)
    })
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl text-center pt-10">Choose Your Class and get Ready For the Fun</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20  px-10">
    {
        allClasses.map(singleCls => <SingleCls key={singleCls._id} singleCls={singleCls}></SingleCls>)
      }
    </div>
    </>
  );
};

export default AllClasses;
