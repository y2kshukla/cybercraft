import Button from "./button";
import { ReactNode } from 'react'

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

export default navitems;