import React from 'react';
import Banner from '../Banner/Banner';
import usePopularSection from '../Hooks/usePopularSection';
import ClassesSection from '../PopularSection/ClassesSection';
import InstructorSection from '../PopularSection/InstructorSection';
import WhatDose from '../WhatDose/WhatDose';
import AcademyProgram from '../AcademyProgram/AcademyProgram';
import Messege from '../Messege/Messege';

const Home = () => {
    return (
        <div>
           <div className='bg-[#000000bb]'>
           <Banner></Banner>
           </div>
           <ClassesSection></ClassesSection>
           <InstructorSection></InstructorSection>
           <WhatDose></WhatDose>
           <AcademyProgram></AcademyProgram>
           <Messege></Messege>
        </div>
    );
};

export default Home;