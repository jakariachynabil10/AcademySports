import React from 'react';
import Banner from '../Banner/Banner';
import usePopularSection from '../Hooks/usePopularSection';
import ClassesSection from '../PopularSection/ClassesSection';

const Home = () => {
    return (
        <div>
           <div className='bg-[#000000bb]'>
           <Banner></Banner>
           </div>
           <ClassesSection></ClassesSection>
        </div>
    );
};

export default Home;