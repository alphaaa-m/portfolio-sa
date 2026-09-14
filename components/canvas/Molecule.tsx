'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function MoleculeStructure() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create nodes
  const nodes = useMemo(() => {
    return [
      new THREE.Vector3(0, 0, 0), // center
      new THREE.Vector3(1.5, 1, 1),
      new THREE.Vector3(-1.5, -1, 1),
      new THREE.Vector3(1, -1.5, -1),
      new THREE.Vector3(-1, 1.5, -1),
    ];
  }, []);

  const lines = useMemo(() => {
    const pairs: THREE.Vector3[][] = [];
    for (let i = 1; i < nodes.length; i++) {
      pairs.push([nodes[0], nodes[i]]);
    }
    pairs.push([nodes[1], nodes[4]]);
    pairs.push([nodes[2], nodes[3]]);
    return pairs;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[i === 0 ? 0.4 : 0.2, 16, 16]}>
          <meshStandardMaterial 
            color={i === 0 ? "#6C63FF" : "#00E5FF"} 
            emissive={i === 0 ? "#6C63FF" : "#00E5FF"}
            emissiveIntensity={0.5}
            roughness={0.2}
          />
        </Sphere>
      ))}
      {lines.map((pair, i) => (
        <Line key={i} points={pair} color="#36CFFF" opacity={0.3} transparent lineWidth={1} />
      ))}
      <pointLight color="#6C63FF" intensity={1} distance={10} />
    </group>
  );
}

export default function MoleculeCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1] opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <MoleculeStructure />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
