'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function NetworkStructure() {
  const groupRef = useRef<THREE.Group>(null);
  
  const numNodes = 20;
  const nodes = useMemo(() => {
    const pts = [];
    for (let i = 0; i < numNodes; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        )
      );
    }
    return pts;
  }, []);

  const lines = useMemo(() => {
    const pairs: THREE.Vector3[][] = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3.5) {
          pairs.push([nodes[i], nodes[j]]);
        }
      }
    }
    return pairs;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.08, 8, 8]}>
          <meshStandardMaterial 
            color="#00E5FF" 
            emissive="#00E5FF"
            emissiveIntensity={0.8}
            roughness={0.2}
          />
        </Sphere>
      ))}
      {lines.map((pair, i) => (
        <Line key={i} points={pair} color="#6C63FF" opacity={0.15} transparent lineWidth={1} />
      ))}
      <pointLight color="#6C63FF" intensity={0.5} distance={20} />
    </group>
  );
}

export default function NetworkCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1] opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <NetworkStructure />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  );
}
