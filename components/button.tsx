import Link from "next/link";
import { PropsWithChildren } from "react";

export interface btn {
    children: string;
    link: string;
}

const Button = (props: PropsWithChildren<btn>) => {
    return (
        <Link className='border-main border-2 px-4 py-2 rounded-tr-2xl rounded-bl-2xl font-semibold text-main inline-block' href={props.link}>
            { props.children }
        </Link>
    );
}
 
export default Button;