import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

import SingleInstructor from "./SingleInstructor";

const AllInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allInstructor, setAllInstructor] = useState([]);
  useEffect(() => {
    axiosSecure("/sportsAcademy")
    .then(res => {
        console.log('all data', res.data)
        setAllInstructor(res.data)
    })
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl text-center pt-10">There our Instructor and Join their Class</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20  px-10">
    {
        allInstructor.map(singleInstructor => <SingleInstructor key={singleInstructor._id} singleInstructor={singleInstructor}></SingleInstructor>)
      }
    </div>
    </>
  );
};

export default AllInstructor;
