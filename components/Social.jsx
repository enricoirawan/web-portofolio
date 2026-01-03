import Link from 'next/link';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://www.linkedin.com/in/enrico-irawan/' },
  { icon: <FaLinkedinIn />, path: 'https://github.com/enricoirawan' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
