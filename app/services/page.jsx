'use client';

import { AiOutlineDatabase } from 'react-icons/ai';
import { SlGlobe, SlScreenSmartphone } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { cloneElement } from 'react';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Building responsive, fast, and user-friendly websites using modern frameworks and best practices.',
    icon: <SlGlobe />,
  },
  {
    num: '02',
    title: 'Mobile Development',
    description:
      'Developing high-quality mobile applications with smooth performance and intuitive user experiences.',
    icon: <SlScreenSmartphone />,
  },
  {
    num: '03',
    title: 'Backend Development',
    description:
      'Designing scalable, secure, and efficient backend systems to power reliable applications.',
    icon: <AiOutlineDatabase />,
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center">
                    {cloneElement(service.icon, {
                      className: 'text-primary text-3xl',
                    })}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
