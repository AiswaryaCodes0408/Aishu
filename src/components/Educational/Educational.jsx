import React from 'react'
import { education } from '../../constants';

const Educational = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white">EDUCATIONAL</h1>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-50 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={item.img}
                alt={item.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? 'sm:ml-0 sm:mr-44 ml-8' : 'sm:mr-0 sm:ml-44 ml-8'
              }`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-20 h-10 bg-white rounded-md overflow-hidden">
                  <img className="w-full h-full object-cover" src={item.img} alt={item.school} />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.school}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{item.grade}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educational;
