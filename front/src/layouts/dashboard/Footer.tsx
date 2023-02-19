import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="flex h-20 w-full justify-center bg-light-mainBg text-light-text dark:bg-dark-mainBg dark:text-dark-text">
      <div className="flex place-self-center">
        <a
          href="https://linkedin.com/in/vladislavli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:linkedin" color="#0072b1" width="32" />
        </a>
        <a href="mailto: dev.vladli@gmail.com" className="ml-2">
          <Icon icon="mdi:email-edit" width="32" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
