import React from "react";
import {
  FaGithub,

  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: "Muhammad Ahmad",
    accounts: [
      {
        url: "https://twitter.com/albertojooao",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/albertojooao",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://twitter.com/albertojooao",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:joao.alberto@amora.fun",
        label: "Mail João",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
