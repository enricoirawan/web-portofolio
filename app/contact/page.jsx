'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+62) 878 1009 2302',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'irawanenrico@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Semarang, Indonesia',
  },
];

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const handleSendMessage = () => {
    const subject = encodeURIComponent(
      `New Contact Request - ${form.service || 'General'}`
    );

    const body = encodeURIComponent(`
      Firstname: ${form.firstName}
      Lastname: ${form.lastName}
      Email: ${form.email}
      Phone: ${form.phone}
      Service: ${form.service}

      Message:
      ${form.message}
    `);

    const mailtoUrl = `mailto:yourname@email.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Feel free to reach out for collaboration, project inquiries, or
                any questions. I&apos;m always open to new opportunities and
                discussions.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  onChange={handleChange}
                  type="firstname"
                  placeholder="Firstname"
                />
                <Input
                  onChange={handleChange}
                  type="lastname"
                  placeholder="Lastname"
                />
                <Input
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                />
                <Input
                  onChange={handleChange}
                  type="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                size="md"
                className="max-w-40"
                onClick={handleSendMessage}
                disabled={!form.email || !form.message}
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
