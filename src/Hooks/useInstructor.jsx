import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
   const {user} = useContext(AuthContext)
   const [axiosSecure] = useAxiosSecure()
   const {data : isInstructor, isLoading : isInstructorLoading} = useQuery({
    queryKey : ['isInstructor', user?.email],
    queryFn : async () =>{
        const res = await axiosSecure(`/users/instructor/${user?.email}`)
        return res.data.admin
    }
   })
   return [isInstructor, isInstructorLoading]
};

export default useInstructor