import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Clipboard } from "../assets/Clipboard";

export const NavBar = (props: any) => {
  return (
    <div className="flex place-content-between p-[20px] dark:bg-black">
      <div>
        <a href="/">
          <Clipboard className="h-10 fill-black dark:fill-white"></Clipboard>
        </a>
      </div>

      <div>
        <DarkModeSwitch setIsDark={props.setIsDark} isDark={props.isDark} />
      </div>
    </div>
  );
};
