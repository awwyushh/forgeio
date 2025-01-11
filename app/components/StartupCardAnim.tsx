"use client";

import { motion } from "framer-motion";

export default function Transition({children}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            drag
            dragConstraints={{left:0, bottom:0, right:0, top:0}}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
}
