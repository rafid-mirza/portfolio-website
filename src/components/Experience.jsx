import React from "react";

const Experience = () => { 
  return (
    <div
      name="experience"
      id="experience"
      className="w-full h-fit bg-[#cbdfe0] text-white"
    >
        
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=' w-full flex justify-center items-center flex-col mb-7'>
            <p className="text-4xl font-bold inline border-b-4 border-[#ac3124] text-center ">
                Experience
            </p>
            <p className="py-4 text-2xl">Here are some of most recent jobs and research: </p>
        </div>
        <div className=" py-16 rounded-md bg-[#ac3124] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 mb-4">
            <div className="sm:text-left pb-0 pl-4">
              <p className="text-3xl font-bold inline border-b-4 border-[#cbdfe0]">
                High-Performance Low-Power Lab
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
            <div className="sm:text-left text-s">
                <p>
                    Position: Undergraduate Research Assistant (Sept 2022 - Dec 2022)
                </p>
                <p>
                    Description:
                </p>
                <ul style={{padding:"1", listStyle:"square", marginLeft:"18px", marginBottom: "20px"}}>
                    <li style={{cursor: "default"}}>
                      Constructed a Python script leveraging Spidev library to communicate with ADXL accelerometer over Serial Peripheral Interface (SPI) of Raspberry Pi
                    </li>
                    <li style={{cursor: "default"}}>
                      Created a Python script to clean and preprocess data in ML/AI pipeline by removing noise and normalizing/calibrating sensor data
                    </li>
                    <li style={{cursor: "default"}}>
                      Simulated multiple mock trials of failure versus regular operation and utilized Pandas to display/analyze the data collected
                    </li>
                </ul>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 mb-4">
            <div className="sm:text-left pb-0 pl-4">
              <p className="text-3xl font-bold inline border-b-4 border-[#cbdfe0]">
                University of Virginia - Department of Computer Science
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
            <div className="sm:text-left text-s">
                <p>
                    Position: Undergraduate Teaching Assistant (Aug 2022 - Dec 2022)
                </p>
                <p>
                    Description:
                </p>
                <ul style={{padding:"1", listStyle:"square", marginLeft:"18px", marginBottom: "20px"}}>
                    <li style={{cursor: "default"}}>
                    Provided guidance and instruction to students of Computer Architecture course in fundamental topics such as: x86 Assembly, caches/cache optimization, bit-fiddling, virtual memory, pipelining processors, and code optimization techniques
                    </li>
                    <li style={{cursor: "default"}}>
                    Led office hours and lab section of roughly 50 students to help with programming assignments such as the disassembling and understanding x86 Assembly code and optimization of C code with caches and Intel Intrinsics
                    </li>
                </ul>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 mb-4">
            <div className="sm:text-left pb-0 pl-4">
              <p className="text-3xl font-bold inline border-b-4 border-[#cbdfe0]">
                SkyIT Services
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
            <div className="sm:text-left text-s">
                <p>
                    Position: Backend Engineer Intern (Jun. 2022 - Aug. 2022)
                </p>
                <p>
                    Description:
                    </p>
                    <ul style={{padding:"1", listStyle:"square", marginLeft:"18px", marginBottom: "20px"}}>
                    <li style={{cursor: "default"}}>
                      Addressed regular production bugs and improvements in existing Django REST Framework APIs using Trello to prioritize requirements with story point Fibonacci method
                    </li>
                    <li style={{cursor: "default"}}>
                      Implemented Multi-Factor Authentication System from scratch deploying HOTP and TOTP algorithms to generate MFA tokens, Twilio API and Django Mail to send tokens, and PyOTP to verify tokens                    
                    </li>
                    <li style={{cursor: "default"}}>
                      Designed new REST APIs for generating maintenance requests to reduce amount of queries being made to SQL database reducing overall time to execute by 50%                    
                    </li>
                    <li style={{cursor: "default"}}>
                      Provided code reviews and approved of merging code to an established codebase through Git with two additional engineers
                    </li>
                    <li style={{cursor: "default"}}>
                      Tested code as per industry standards using Postman for rapid API testing and documentation
                    </li>
                    <li style={{cursor: "default"}}>
                      Discussed changes and progress in bi-weekly sprint meetings with Executive Director and weekly standup with CEO
                    </li>

                </ul>
                
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;