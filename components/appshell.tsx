import { MenuState } from "@/utils/state";
import React, { PropsWithChildren, ReactNode } from "react";
import { useSnapshot } from "valtio";
import Footer from "./Footer";
import Menu from "./menu";
import Navbar from "./navbar";

export interface props {
    children: ReactNode;
}

const AppShell = (props: PropsWithChildren<props>) => {
    const snap = useSnapshot(MenuState);
    return (
        <div>
            {snap.isOpen && <Menu/>}
            <Navbar/>
            <div className="mx-8">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}
 
export default AppShell;