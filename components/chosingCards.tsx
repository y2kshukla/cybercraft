import { PropsWithChildren } from "react";
import Heading  from './heading';
interface card {
    heading: string;
    children: string;
}
const ChosingCards = (props: PropsWithChildren<card>) => {
    return (
        <div className="flex flex-col gap-4 border-main border-2 p-4 rounded-tr-2xl rounded-bl-2xl">
            <Heading type="h2">{ props.heading }</Heading>
            <p>{ props.children }</p>
        </div>
    );
}
 
export default ChosingCards;