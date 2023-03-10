import Image from "next/image";
import { PropsWithChildren } from "react";
import Heading from "./heading";

type card = {
    Img: string;
    Heading: string;
    text: string;
}

const ServiceCard = (props: PropsWithChildren<card>) => {
    return (
        <div className="border-main border-2 rounded-2xl overflow-hidden p-8 flex flex-col gap-4">
            <div className="relative h-40">
                <Image className="object-cover" src={props.Img} alt="some text" fill/>
            </div>
            <Heading type="h2">{ props.Heading }</Heading>
            <p>{ props.text }</p>
        </div>
    );
}
 
export default ServiceCard;