import { NavBar } from "./NavBar";

export const MainLayout = (props: any) => {
  return (
    <div className="h-screen dark:bg-tb">
      <NavBar />
      {props.children}
    </div>
  );
};
