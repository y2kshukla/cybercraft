import React, { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";

export interface props {
    children: any;
}

const AppShell = (props: PropsWithChildren<props>) => {
    return (
        <div>
            <Navbar/>
            <div className="mx-8">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}
 
export default AppShell;