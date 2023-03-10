import Link from "next/link";
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
            link: '/',
        },
        {
            id: 3,
            children: 'Services',
            link: '/',
        },
        {
            id: 4,
            children: 'Our Work',
            link: '/',
        },
        {
            id: 5,
            children: 'Privacy Policy',
            link: '/',
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
        <div className="px-8 width-full bg-background flex justify-between">
            <div>Icon</div>
            <div className="flex">
                <ul className="flex gap-4 py-4">
                    {
                        navitems.map((items) => {
                            return (
                                <li key={items.id}>
                                    <Link className="text-secondary font-semibold" href={items.link}>{ items.children }</Link>
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