import react from "react";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Logout from "./Logout";

export const AppLayoutContent = () => {
    const status_info = useSelector((store) => store.cart.userStatus);
    if (status_info==='Logout'){
        return <Logout/>
    }

    return (
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
    );
};
