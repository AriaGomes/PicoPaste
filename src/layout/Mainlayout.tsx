import { NavBar } from "./NavBar"

export const MainLayout = (props: any) => {
    return(
    <div className="dark:bg-tb h-screen">
        <NavBar />
        {props.children}
    </div>
    )
}