'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    title: 'Kereta Api Indonesia (Indonesian National Train)',
    description:
      'Developed and maintained scalable web microsites for Indonesia National Train ticket sales across Indonesia, enabling seamless integration with Bank Central Asia Indonesia Lifestyle for thousands of users.',
    stack: [
      { name: 'React JS' },
      { name: 'Tailwind CSS' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'React Hook Form' },
    ],
    image: '/assets/work/kai-bca-detail.png',
    live: 'https://www.bca.co.id/id/informasi/news-and-features/2025/05/27/02/14/mybca-makin-lengkap-bisa-beli-tiket-kai-pelni-dan-tempat-wisata',
    github: '',
  },
  {
    num: '02',
    title: 'MKP Lifestyle',
    description:
      'Developed and maintained scalable web microsites for Tourist Destinations in Indonesia ticket sales across Indonesia, enabling seamless integration with Bank Central Asia Indonesia Lifestyle for thousands of users.',
    stack: [
      { name: 'React JS' },
      { name: 'Tailwind CSS' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'React Hook Form' },
    ],
    image: '/assets/work/mkp-lifestyle.png',
    live: 'https://www.bca.co.id/id/informasi/news-and-features/2025/05/27/02/14/mybca-makin-lengkap-bisa-beli-tiket-kai-pelni-dan-tempat-wisata',
    github: '',
  },
  {
    num: '03',
    title: 'MKP Pelni (Indonesian National Ship)',
    description:
      'Developed and maintained scalable web microsites for nationwide ship ticket sales, serving high-profile clients including Bank Central Asia (BCA) Indonesia and Bank Mandiri (Livin - Sukha) Indonesia used by 5,000+ daily users and generating over IDR 100M monthly revenue',
    stack: [
      { name: 'React JS' },
      { name: 'Tailwind CSS' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'React Hook Form' },
    ],
    image: '/assets/work/mkp-pelni.png',
    live: 'https://www.bca.co.id/id/informasi/news-and-features/2025/05/27/02/14/mybca-makin-lengkap-bisa-beli-tiket-kai-pelni-dan-tempat-wisata',
    github: '',
  },
  {
    num: '04',
    title: 'TiketKapal.com Website, Kios-K & Mobile',
    description:
      'Developed and released desktop POS, web, and mobile applications for port operations in collaboration with the Directorate of Sea Traffic (Direktorat Lalu Lintas Laut) and Transportation, Ministry of Transportation (Kementrian Perhubungan) in Indonesia.',
    stack: [{ name: 'React JS' }, { name: 'Next JS' }, { name: 'Flutter' }],
    image: '/assets/work/mkp-tiket-kapal.png',
    live: 'tiketkapal.com',
    github: '',
  },
  {
    num: '05',
    title: 'MKP Mitra Mint App',
    description:
      'Built and maintained the Mint Android application, enabling retail agents to perform transactions through a mobile POS system integrated with over 1,000 PPOB products, supporting both cash and digital payments. Tech Stack: Flutter, Provider, Firebase',
    stack: [{ name: 'Flutter' }, { name: 'Provider' }, { name: 'Firebase' }],
    image: '/assets/work/mkp-mint-community.png',
    live: 'tiketkapal.com',
    github: '',
  },
  {
    num: '06',
    title: 'MKP Parking Apps',
    description:
      'Built and maintained a mobile POS application for parking systems on Sunmi, Tianyu, and Ingenico devices, fully integrated with payment gateways such as QRIS, debit cards, and prepaid systems.',
    stack: [
      { name: 'React-Native' },
      { name: 'Java Native Module' },
      { name: 'Material UI' },
    ],
    image: '/assets/work/mkp-parkir-detail.png',
    live: 'https://www.youtube.com/watch?v=s3ibMMxWgAk',
    github: '',
  },
  {
    num: '07',
    title: 'MKP E-Retribution',
    description:
      'Built and maintained a Mobile POS app deployed on Sunmi, Tianyu, and Ingenico devices for collecting rental payments from kiosk merchants in markets across Indonesia. The app was integrated with various payment methods, including QRIS, debit cards, and prepaid systems.',
    stack: [
      { name: 'React-Native' },
      { name: 'Java Native Module' },
      { name: 'Material UI' },
    ],
    image: '/assets/work/mkp-eretribusi-detail.png',
    live: 'https://www.youtube.com/watch?v=glOBN2EXNXI',
    github: '',
  },
  {
    num: '08',
    title: 'project 3',
    description:
      'Built and maintained a Mobile POS application for ticket sales on Sunmi, Tianyu, and Ingenico devices, integrated with QRIS, debit card, and prepaid payment gateways. Tech Stack: Android Native (Java), Retrofit, Dagger-Hilt, MVVM',
    stack: [
      { name: 'Android' },
      { name: 'Material UI' },
      { name: 'Dagger-Hilt' },
      { name: 'Retrofit' },
      { name: 'MVVM' },
    ],
    image: '/assets/work/mkp-eticketing-detail.png',
    live: 'https://www.youtube.com/watch?v=glOBN2EXNXI',
    github: '',
  },
  {
    num: '09',
    title: 'project 3',
    description:
      'Simple app that can show list of anime, show anime details, anime search and favorite features.',
    stack: [
      { name: 'Swift' },
      { name: 'Auto layout' },
      { name: 'Full layout anchor ' },
      { name: 'Realm Local DB' },
      { name: 'Swinject' },
    ],
    image: '/assets/work/ios.png',
    live: 'https://www.linkedin.com/posts/enrico-irawan_developer-programming-ios-activity-7013014364555264000-thd_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4a1fEBmz8Ei2sII6gaF500rz2O8Enn4y4',
    github: 'https://github.com/enricoirawan/Weabopedia-IOS-Modular',
  },
  {
    num: '10',
    title: 'Goodsone Vendor App',
    description:
      'Built and deployed a mobile application for managing and monitoring party vendor services (Goodsone ID). Utilized Flutter with BLoC architecture, integrated Firebase for push notifications, app distribution, and crash analytics.',
    stack: [
      { name: 'Flutter' },
      { name: 'BLoC' },
      { name: 'Firebase' },
      { name: 'Push Notification' },
    ],
    image: '/assets/work/goodsone-detail.png',
    live: '',
    github: '',
  },
  {
    num: '11',
    title: 'KitaBisa Campaign App Clone',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.',
    stack: [
      { name: 'Next js' },
      { name: 'Nest JS' },
      { name: 'Prisma ORM' },
      { name: 'PostgreSQL' },
    ],
    image: '/assets/work/kita-bisa.png',
    live: '',
    github:
      'https://github.com/enricoirawan/kitabisa-frontend?tab=readme-ov-file',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full overflow-hidden group">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover transform transition duration-900 group-hover:object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
