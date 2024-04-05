import React from "react";
import { BsFacebook } from "react-icons/bs";

import { SiGmail } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <a
        href="https://www.facebook.com/profile.php?id=61557095551294&mibextid=ZbWKwL"
        target="_blank"
        className="text-3xl hover:opacity-70"
      >
        <BsFacebook />
      </a>

      <a
        target="_blank"
        href="mailto:fatmhmshl555@gmail.com"
        className="text-3xl hover:opacity-70"
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default SocialIcons;
