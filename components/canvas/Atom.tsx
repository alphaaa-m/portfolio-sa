'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Trail } from '@react-three/drei';
import * as THREE from 'three';

function Electron({ radius = 2, speed = 1, color = '#00E5FF', startAngle = 0, axis = [0, 1, 0] }) {
  const ref = useRef<THREE.Mesh>(null);
  
  // Create rotation matrix based on custom axis
  const axisVec = useMemo(() => new THREE.Vector3(...axis).normalize(), [axis]);
  const rotationMatrix = useMemo(() => new THREE.Matrix4(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + startAngle;
    
    // Calculate position in 2D plane (x, z)
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    
    // Apply arbitrary rotation to create different orbital planes
    const pos = new THREE.Vector3(x, 0, z);
    
    // We want the orbit normal to align with axisVec.
    // Default normal is Y axis (0,1,0). 
    const defaultNormal = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(defaultNormal, axisVec);
    pos.applyQuaternion(quaternion);
    
    ref.current.position.copy(pos);
  });

  return (
    <Trail width={1} color={color} length={5} attenuation={(t) => t * t}>
      <Sphere ref={ref} args={[0.1, 16, 16]}>
        <meshBasicMaterial color={color} />
      </Sphere>
    </Trail>
  );
}

function Nucleus() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color="#6C63FF" 
          emissive="#6C63FF"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <pointLight color="#6C63FF" intensity={2} distance={10} />
    </group>
  );
}

export default function AtomCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1] opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        
        <Nucleus />
        
        {/* Electrons in different orbital planes */}
        <Electron radius={2.5} speed={1.5} color="#00E5FF" axis={[1, 1, 0]} />
        <Electron radius={2.5} speed={1.2} color="#36CFFF" axis={[-1, 1, 0]} startAngle={Math.PI / 2} />
        <Electron radius={2.5} speed={1.8} color="#00E5FF" axis={[0, 1, 1]} startAngle={Math.PI} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
