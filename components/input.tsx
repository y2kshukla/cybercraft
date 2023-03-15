import { PropsWithChildren } from "react";
import { FiSend } from "react-icons/fi";

export interface input {
    // children: string;
    Button: boolean;
}

const Input = (props: PropsWithChildren<input>) => {
    return (
        <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-500">
                Email
            </span>
            <div className="flex bg-white bg-opacity-10 rounded-md overflow-hidden">
                <input className="bg-transparent focus:outline-none text-white px-2 py-1 placeholder:italic placeholder:text-white placeholder:text-opacity-10" placeholder="Your email address" type="text" name="input"/>
                {props.Button == true && <button className="px-4 bg-main text-white">
                    <FiSend/>
                </button>}
            </div>
        </label>
    );
}

export default Input;