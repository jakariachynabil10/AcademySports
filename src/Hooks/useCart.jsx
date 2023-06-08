import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
   const {user, loading} = useContext(AuthContext)
   const [axiosSecure] = useAxiosSecure()

   const {refetch, data : carts = []} = useQuery({
    queryKey : ['carts', user?.email],
    enabled : !loading,
    queryFn : async () =>{
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        console.log('carts response', res)
        return res.data
    }
   })

   return [carts, refetch]
};

export default useCart;