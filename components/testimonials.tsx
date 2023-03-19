import { PropsWithChildren } from "react";
import { FiStar, FiThumbsUp } from "react-icons/fi";

interface testimonials {
    text: string;
    writer: string;
    role: string;
}

const Testimonials = (props: PropsWithChildren<testimonials>) => {
    return (
        <div className="border-main border-2 p-4 flex flex-col gap-4 h-auto">
            <div className="flex justify-between">
                <div className="flex">
                    {Array(5).fill(<FiStar size={16} fill="#BC69ED" stroke="none"/>).map((items, index) => {
                        return <span key={index}>{ items }</span>
                    })}
                </div>
                <div className="flex gap-2">
                    <span className="p-1 bg-main rounded-full">
                        <FiThumbsUp fill="white"/>
                    </span>
                    <p>Testimonials</p>
                </div>
            </div>
            <p className="font-medium">{ props.text }</p>
            <div>
                <div className="font-bold">{ props.writer }</div>
                <div className="text-xs">{ props.role }</div>
            </div>
        </div>
    );
}
 
export default Testimonials;