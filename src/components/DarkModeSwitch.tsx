import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export const DarkModeSwitch = (props: any) => {
  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem("theme") === "dark") {
      return false;
    } else {
      return true;
    }
  });

  const toggleSwitch = () => {
    setIsOn(!isOn);
    props.setIsDark(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  if (isOn) {
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
  }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start dark:bg-zinc-700 flex h-[50px] w-[100px] rounded-[50px] bg-gray-200 p-[5px] shadow-inner hover:cursor-pointer ${
        isOn && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white dark:bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {!isOn ? (
            <RiSunFill className="h-6 w-6 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="text-slate-200 h-6 w-6 text-white" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
