import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png';
import { ReactNode } from "react";
import Button from "./button";

const Navbar = () => {

    type navItems  = {
        id: number;
        children: ReactNode;
        link: string;
    }

    const navitems:navItems[] = [
        {
            id: 1,
            children: 'Home',
            link: '/',
        },
        {
            id: 2,
            children: 'About Us',
            link: '/about',
        },
        {
            id: 3,
            children: 'Services',
            link: '/services',
        },
        {
            id: 4,
            children: 'Our Work',
            link: '/work',
        },
        {
            id: 5,
            children: 'Privacy Policy',
            link: '/privacy',
        },
        {
            id: 6,
            children: (<Button link="/">
                        Contact Us
                    </Button>),
            link: '/',
        }
    ];

    return (
        <div className="px-8 py-2 width-full bg-background flex justify-between items-center">
            <div>
                <Image src={logo} alt='Some Text'/>
            </div>
            <div className="flex">
                <ul className="flex gap-4 ">
                    {
                        navitems.map((items) => {
                            return (
                                <li key={items.id}>
                                    <Link className="text-white font-semibold" href={items.link}>{ items.children }</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;