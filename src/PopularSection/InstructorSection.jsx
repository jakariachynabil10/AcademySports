import React from 'react';
import usePopularSection from '../Hooks/usePopularSection';
import InstructorCard from './InstructorCard';

const InstructorSection = () => {
    const [popularClasses] = usePopularSection()
    return (
        <>
        <h1 className='text-center font-bold text-3xl mt-16'>Popular Instructor</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 px-10'>
            {
                popularClasses.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard> )
            }
        </div>
        </>
    );
};

export default InstructorSection;