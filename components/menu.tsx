import { MenuState } from "@/utils/state";
import Link from "next/link";
import navitems from "./navItems";

const Menu = () => {
    return (
        <div className="fixed w-full h-full bg-background flex items-center justify-center z-40">
            <ul className="flex text-white flex-col gap-4 items-center w-full">
                {navitems.map((item) => {
                    return (
                        <li className="w-full text-center" key={item.id}>
                            <Link onClick={() => MenuState.isOpen = false} className="w-full block p-2 font-semibold" href={item.link}>{ item.children }</Link>
                        </li>
                    )
                } )}
            </ul>
        </div>
    );
}

export default Menu;