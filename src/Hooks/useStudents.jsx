import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStudents = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data : isStudents, isLoading : isStudentsLoading} = useQuery({
        queryKey : ['isStudents', user?.email],
        enabled : !loading,
        queryFn : async () =>{
            const res = await axiosSecure(`/users/students/${user?.email}`)
            // console.log('is admin response', res)
            return res.data.admin
        }
    })
    return [isStudents, isStudentsLoading]
};

export default useStudents;