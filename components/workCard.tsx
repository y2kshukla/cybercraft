import { PropsWithChildren, ReactNode } from "react";
import Button from "./button";
import Heading from "./heading";

type Card = {
    Heading: ReactNode;
    Img: string;
    Link: string;
}

const WorkCard = (props: PropsWithChildren<Card>) => {
    return (
        <div className="flex flex-col gap-4 pb-4 border-b-2 border-main">
            <Heading type="h2">{ props.Heading }</Heading>
            <img className="h-72 object-cover" src={ props.Img }/>
            <div className="flex justify-between items-center">
                <div>{ props.Heading }</div>
                <Button link={ props.Link }>Know More</Button>
            </div>
        </div>
    );
}
 
export default WorkCard;