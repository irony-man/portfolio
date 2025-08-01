import React, { useMemo, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Shape from "./Shape";

const Experience = () => {
    const { boxGeometry, sphereGeometry, material } = useMemo(
        () => ({
            boxGeometry: new THREE.BoxGeometry(10, 10, 10),
            sphereGeometry: new THREE.SphereGeometry(6, 32, 32),
            material: new THREE.MeshStandardMaterial({
                color: 0xa0aec0,
                metalness: 0.8,
                roughness: 0.5
            })
        }),
        []
    );

    const shapes = useMemo(
        () =>
            Array.from({ length: 15 }, () => {
                const isBox = Math.random() > 0.5;
                const scale = Math.random() * 0.5 + 0.5;
                return {
                    geometry: isBox ? boxGeometry : sphereGeometry,
                    position: [
                        (Math.random() - 0.5) * 100,
                        (Math.random() - 0.5) * 100,
                        (Math.random() - 0.5) * 100
                    ],
                    rotation: [
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        Math.random() * Math.PI
                    ],
                    scale: [scale, scale, scale]
                };
            }),
        [boxGeometry, sphereGeometry]
    );

    const scrollY = useRef(0);
    useEffect(() => {
        const handleScroll = () => (scrollY.current = window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { pointer } = useThree();

    useEffect(() => {
        const handleMouseMove = (event) => {
            pointer.set(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            );
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [pointer]);

    const tempVector = new THREE.Vector3();

    useFrame((state) => {
        const targetZ = 50 - scrollY.current * 0.04;

        state.camera.position.z = THREE.MathUtils.lerp(
            state.camera.position.z,
            targetZ,
            0.05
        );
        tempVector.set(
            state.mouse.x * 5,
            state.mouse.y * 5,
            state.camera.position.z
        );
        state.camera.position.lerp(tempVector, 0.05);
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={0.5} color={0xffffff} />
            <pointLight
                color={0x2d2d4d}
                intensity={1.5}
                position={[10, 10, 20]}
            />
            <directionalLight
                intensity={0.8}
                color={0xffffff}
                position={[-1, -1, 1]}
            />

            {shapes.map((props, i) => (
                <Shape key={i} material={material} {...props} />
            ))}
        </>
    );
};

export default Experience;
