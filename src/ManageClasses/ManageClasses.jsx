import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SingleCard from "./SingleCard";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axiosSecure("/manageClasses").then((data) => {
      console.log(data.data);
      setDatas(data.data);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mx-10">
        {datas.map((data) => (
          <SingleCard key={data._id} data={data}></SingleCard>
        ))}
      </div>
    </>
  );
};

export default ManageClasses;
