'use client';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiSpringboot,
  SiNestjs,
  SiDocker,
  SiFigma,
  SiPostgresql,
  SiGithub,
  SiGitlab,
  SiKotlin,
  SiFlutter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// about data
const about = {
  title: 'About me',
  description:
    'Sharing knowledge with others — whether through discussion, collaboration, or mentorship — is something I genuinely enjoy, because I believe learning grows stronger when shared.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Enrico Irawan',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+62) 878 1009 2302',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indonesian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'irawanenrico@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Indonesia, Japanese',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Experienced in creating reliable web, mobile, and backend applications with a strong focus on quality and performance.',
  items: [
    {
      company: 'PT. MITRA KASIH PERKASA',
      position: 'Front-End Developer',
      duration: '2022 - present',
    },
    {
      company: 'PT. SHANKARA MITRA SENTOSA',
      position: 'Freelance Mobile Developer',
      duration: '2023',
    },
    {
      company: 'PT. SOLUSI TEKONOLOGI',
      position: 'Mobile Flutter Developer',
      duration: '2021 - 2022',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'A learning journey built through formal education, professional certifications, and continuous skill development in software engineering.',
  items: [
    {
      institution: 'Dicoding Indonesia',
      degree: 'Flutter Developer Expert',
      duration: '2022',
    },
    {
      institution: 'Dicoding Indonesia',
      degree: 'iOS Swift Developer Expert',
      duration: '2022',
    },
    {
      institution: 'Dicoding Indonesia',
      degree: 'Android Kotlin Intermediate',
      duration: '2022',
    },
    {
      institution: 'Dian Nuswantoro Univeristy',
      degree: 'Bachelor in Computer Science',
      duration: '2018 - 2022',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  description:
    'A solid skill set built through hands-on experience and continuous learning in modern software development.',
  skillList: [
    {
      icon: <SiTypescript />,
      name: 'Typescript',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next Js',
    },
    {
      icon: <SiReact />,
      name: 'React Js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next Js',
    },
    {
      icon: <SiNestjs />,
      name: 'Nest Js',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <SiSpringboot />,
      name: 'Springboot',
    },
    {
      icon: <SiKotlin />,
      name: 'Kotlin',
    },
    {
      icon: <SiFlutter />,
      name: 'Flutter',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
    {
      icon: <SiFigma />,
      name: 'Figma',
    },
    {
      icon: <SiDocker />,
      name: 'Docker',
    },
    {
      icon: <SiGithub />,
      name: 'Github',
    },
    {
      icon: <SiGitlab />,
      name: 'Gitlab',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
