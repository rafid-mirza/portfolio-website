import React from 'react';

const Skills = ({content}) => {
  return (
    <div name='skills' className='w-full h-fit bg-[#cbdfe0] font-bold text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-fit'>
          <div className=' w-full h-fit flex justify-center items-center flex-col mb-7'>
            <p className="text-4xl font-bold inline border-b-4 border-[#ac3124] text-center ">
                Skills and Coursework
            </p>
            <p className="py-4 text-2xl">{content?.fields.skill_header}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {content?.fields.skills.map((skill, index) => {
                return (
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ac3124]" key={index}>
                        <p className="my-4">{skill.terminology}</p>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};
export default Skills;