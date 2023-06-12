import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePopularSection = () => {
   const {data : popularClasses = [], isLoading : loading} = useQuery({
    queryKey : ['popularClasses'],
    queryFn : async () =>{
        const res = await fetch('https://assigment12-server.vercel.app/popularClasses')
        return res.json()
    }
   })
   return [popularClasses, loading]
};

export default usePopularSection;