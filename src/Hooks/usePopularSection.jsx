import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePopularSection = () => {
   const {data : popularClasses = [], isLoading : loading} = useQuery({
    queryKey : ['popularClasses'],
    queryFn : async () =>{
        const res = await fetch('http://localhost:9000/popularClasses')
        return res.json()
    }
   })
   return [popularClasses, loading]
};

export default usePopularSection;