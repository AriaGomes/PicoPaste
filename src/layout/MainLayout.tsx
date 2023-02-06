import { NavBar } from "./NavBar";

export const MainLayout = (props: any) => {
  return (
    <div className="h-[100vh] dark:bg-black">
      <NavBar setIsDark={props.setIsDark} isDark={props.isDark} />
      {props.children}
    </div>
  );
};
