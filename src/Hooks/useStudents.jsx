import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStudents = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data : isStudents, isLoading : isStudentsLoading} = useQuery({
        queryKey : ['isStudents', user?.email],
        queryFn : async () =>{
            const res = await axiosSecure(`/users/students/${user?.email}`)
            console.log('is admin response', res)
            return res.data.admin
        }
    })
    return [isStudents, isStudentsLoading]
};

export default useStudents;