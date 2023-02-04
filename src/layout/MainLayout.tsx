import { NavBar } from "./NavBar";

export const MainLayout = (props: any) => {
  return (
    <div className="h-[100vh] dark:bg-tb">
      <NavBar />
      {props.children}
    </div>
  );
};
