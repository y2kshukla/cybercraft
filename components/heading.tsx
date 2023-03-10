import { PropsWithChildren, ReactNode } from "react";

interface heading {
    children: ReactNode;
    className?: string;
    type?: string;
}

const Heading: React.FC<heading> = ({ children, type='h1', className='' }) => {
    if (type == 'h2') {
        return (
            <h2 className={`text-2xl font-semibold ${className}`}>{ children }</h2>
        );
    }
    return (
        <h1 className={`text-5xl font-bold ${className}`}>{ children }</h1>
    );
}
 
export default Heading;