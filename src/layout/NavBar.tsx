import DarkModeSwitch from "../components/DarkModeSwitch";

export const NavBar = () => {
  return (
    <div className="flex place-content-between p-[20px] dark:bg-tb">
      <div>
        <a href="/">
          <img className="dark:text-white" alt="logo home button"></img>{" "}
        </a>
      </div>

      <div>
        <DarkModeSwitch />
      </div>
    </div>
  );
};
