import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import { FiDribbble, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from '../public/logo.png';
import Input from "./input";

const Footer = () => {
    const Heading = (props : PropsWithChildren<{ children: string }>) => {
        return (
            <div className="text-main text-xl font-medium">{ props.children }</div>
        );
    }
    const Text = (props : PropsWithChildren<{ children: string }>) => {
        return (
            <div className="text-slate-300 font-medium">{ props.children }</div>
        );
    }
    const Icon = (props : PropsWithChildren<{ children: ReactNode }>) => {
        return (
            <span className="text-white bg-main p-1 flex rounded-full">{ props.children }</span>
        );
    }

    return (
        <div className="bg-background flex justify-between px-8 py-8">
            <div className="flex flex-col gap-8">
                <div>
                    <Image src={logo} alt='Logo'/>
                </div>
                <Text>© 2023 Cyber Crafts Agency. All rights reserved</Text>
                <div className="flex gap-2">
                    <Icon>
                        <FiInstagram/>
                    </Icon>
                    <Icon>
                        <FiDribbble/>
                    </Icon>
                    <Icon>
                        <FiTwitter/>
                    </Icon>
                    <Icon>
                        <FiYoutube/>
                    </Icon>
                </div>
            </div>
            <div className="flex gap-16">
                <div className="flex flex-col gap-4">
                    <Heading>Company</Heading>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Text>
                                About us
                            </Text>
                        </li>
                        <li>
                            <Text>
                                Contact us
                            </Text>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <Heading>Support</Heading>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Text>
                                Help
                            </Text>
                        </li>
                        <li>
                            <Text>
                                Terms of Service
                            </Text>
                        </li>
                        <li>
                            <Text>
                                Legal
                            </Text>
                        </li>
                        <li>
                            <Text>
                                Privacy Policy
                            </Text>
                        </li>
                        <li>
                            <Text>
                                Status
                            </Text>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <Heading>Newsletter</Heading>
                    <Input/>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;