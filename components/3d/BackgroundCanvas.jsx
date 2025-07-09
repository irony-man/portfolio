import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const BackgroundCanvas = () => {
    return (
        <div className="three-canvas">
            <Canvas
                camera={{ position: [0, 0, 50], fov: 75 }}
                gl={{ alpha: true }}
            >
                <Experience />
            </Canvas>
        </div>
    );
}

export default BackgroundCanvas;
