import React from 'react';
import usePopularSection from '../Hooks/usePopularSection';
import ClassesCard from './ClassesCard';

const ClassesSection = () => {
    const [popularClasses] = usePopularSection();
    console.log(popularClasses)

    return (
        <>
            <h1 className='text-center font-bold text-3xl mt-10'>Popular Classes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 px-10'>
                {popularClasses.map((classItem) => (
                    <ClassesCard key={classItem._id} classItem={classItem} />
                ))}
            </div>
        </>
    );
};

export default ClassesSection;
