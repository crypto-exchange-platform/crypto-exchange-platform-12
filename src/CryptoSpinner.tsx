import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const BitcoinModel = () => {
  const { scene } = useGLTF('/models/bitcoin.glb');
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });

  return (
    <group ref={ref} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
};

export const CryptoSpinner = () => (
 <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
  {/* Stronger ambient and directional lighting */}
  <ambientLight intensity={1.2} />
  <directionalLight position={[5, 5, 5]} intensity={2} color="#ffd700" />
  <directionalLight position={[-5, 5, 2]} intensity={1} color="#ffecb3" />
  
  {/* Optional environment lighting */}
  <pointLight position={[0, 0, 10]} intensity={1.5} color="#ffffff" />

  <BitcoinModel />

  <OrbitControls
    enableZoom={false}
    enablePan={false}
    enableRotate={true}
    autoRotate
    autoRotateSpeed={1}
  />
</Canvas>

);
 