import {DarkModeSwitch} from "../components/DarkModeSwitch";

export const NavBar = (props:any) => {
  return (
    <div className="flex place-content-between p-[20px] dark:bg-tb">
      <div>
        <a href="/">
          <img className="dark:text-white" alt="logo home button"></img>{" "}
        </a>
      </div>

      <div>
        <DarkModeSwitch setIsDark={props.setIsDark} isDark={props.isDark}/>
      </div>
    </div>
  );
};
