import { PropsWithChildren, ReactNode } from "react";

interface heading {
    children: ReactNode;
    type?: string;
}

const Heading: React.FC<heading> = ({ children, type='h1' }) => {
    if (type == 'h2') {
        return (
            <h2 className="text-2xl font-semibold">{ children }</h2>
        );
    }
    return (
        <h1 className="text-5xl font-bold">{ children }</h1>
    );
}
 
export default Heading;