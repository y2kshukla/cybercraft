import { PropsWithChildren, ReactNode } from "react";

interface stack {
    children: ReactNode;
    className: string;
}

const Stack = (props: PropsWithChildren<stack>) => {
    return (
        <div className={props.className}>
            { props.children }
        </div>
    );
}
 
export default Stack;