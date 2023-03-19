import { Variants } from "framer-motion";

const transition = {
    type: 'linear',
    duration: 0.5
}

const slide = ( x: number ) => {
    const animationVar: Variants = {
      offscreen: {
        x: x,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: transition
      }
    }
    return animationVar;
}

const pop = () => {
    const animation: Variants = {
        offscreen: {
            opacity: 0,
            scale: 0.5
        },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: transition
        }
    }
    return animation;
}

export { slide, pop };