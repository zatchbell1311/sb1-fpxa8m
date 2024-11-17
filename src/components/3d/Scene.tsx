import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, ScrollControls, Scroll } from '@react-three/drei';
import FoodModel from './FoodModel';

export default function Scene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <ScrollControls pages={1} damping={0.3}>
          <Scroll>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight
              position={[0, 5, 0]}
              intensity={0.8}
              penumbra={1}
              angle={Math.PI / 4}
            />
            <FoodModel />
          </Scroll>
        </ScrollControls>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}