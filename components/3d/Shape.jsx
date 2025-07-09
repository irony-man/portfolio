import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Shape = ({ ...props }) => {
    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x += 0.001;
            ref.current.rotation.y += 0.002;
        }
    });
    return <mesh ref={ref} {...props} />;
}

export default Shape;