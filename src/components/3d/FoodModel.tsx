import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function FoodModel() {
  const meshRef = useRef<THREE.Mesh>();
  const scroll = useScroll();
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Base rotation
    meshRef.current.rotation.y += delta * 0.5;

    // Scroll-based animations
    const scroll_offset = scroll.offset;
    
    // Scale effect based on scroll
    const scale = THREE.MathUtils.lerp(1.5, 2.0, scroll_offset);
    meshRef.current.scale.setScalar(scale);

    // Color transition based on scroll
    const hue = THREE.MathUtils.lerp(0.1, 0.5, scroll_offset);
    const color = new THREE.Color().setHSL(hue, 0.8, 0.5);
    meshRef.current.material.color = color;

    // Wobble effect
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    
    // Rotation speed increases with scroll
    const rotationSpeed = THREE.MathUtils.lerp(0.5, 2.0, scroll_offset);
    meshRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      <torusGeometry args={[1, 0.3, 32, 100]} />
      <meshStandardMaterial 
        color="#ff9f43"
        metalness={0.7}
        roughness={0.2}
        emissive="#ff9f43"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}