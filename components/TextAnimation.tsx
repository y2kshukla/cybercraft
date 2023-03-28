import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface text {
    text: string;
}

const TextAnimation = (props: PropsWithChildren<text>) => {
    // const animationText = `${text}`;
    return (
        <motion.div>
            {props.text.split("").map((letter, index) => {
                return (<motion.span
                            key={index}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index*0.1 }}
                        >
                            { letter }
                        </motion.span>
            )})}
        </motion.div>
    );
}
 
export default TextAnimation;