import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiMailSendFill,
} from "react-icons/ri";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto w-full text-center flex flex-col gap-3 px-2 md:px-0">
      <div className="flex items-center justify-center gap-8">
        <Link
          href="https://www.facebook.com/hongducdev/"
          className="text-neutral-500 dark:text-neutral-300 font-medium hover:text-green-1000 transition-all duration-300 ease-in-out text-4xl"
        >
          <RiFacebookCircleFill />
        </Link>
        <Link
          href="https://github.com/hongducdev"
          className="text-neutral-500 dark:text-neutral-300 font-medium hover:text-green-1000 transition-all duration-300 ease-in-out text-4xl"
        >
          <RiGithubFill />
        </Link>
        <Link
          href="mailto:contact.hongducdev@gmail.com"
          className="text-neutral-500 dark:text-neutral-300 font-medium hover:text-green-1000 transition-all duration-300 ease-in-out text-4xl"
        >
          <RiMailSendFill />
        </Link>
      </div>
      <p className="">
        Cảm ơn các bạn đã đến với website. Nơi đây là nơi thỏa mãn mong muốn
        viết lách của mình.
      </p>
      <p className="text-center text-neutral-500 dark:text-neutral-300">
        © 2024 hongducdev
      </p>
    </footer>
  );
};

export default Footer;
