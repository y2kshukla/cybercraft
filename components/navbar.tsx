import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png';
import { useState } from "react";
import Hamburger from "hamburger-react";
import useMediaQuery from "./hooks/useMediaQuery";
import navitems from "./navItems";
import { useSnapshot } from "valtio";
import { MenuState } from "@/utils/state";
import Button from "./button";

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const snap = useSnapshot(MenuState);
    const matches = useMediaQuery('(max-width: 640px)');

    return (
        <div className="px-8 py-2 width-full bg-background flex justify-between items-center sticky top-0 z-50">
            <div>
                <Image src={logo} alt='Some Text'/>
            </div>
            {!matches ? (<div className="flex">
                <ul className="flex gap-4 ">
                    {
                        navitems.map((items) => {
                            return (
                                <li key={items.id} className="flex items-center">
                                    <Link className="text-white font-semibold" href={items.link}>{ items.children }</Link>
                                </li>
                            );
                        })
                    }
                    <li>
                    <Button link="/contact">
                        Contact Us
                    </Button>
                    </li>
                </ul>
            </div>) :
            (<div>
                <Hamburger color="white" toggled={snap.isOpen} onToggle={toggled => MenuState.isOpen = toggled}/>
            </div>)}
        </div>
    );
}

export default Navbar;