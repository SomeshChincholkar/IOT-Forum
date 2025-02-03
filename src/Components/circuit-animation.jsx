import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

// Circuit line component
function CircuitLine({ start, end, color = '#4299e1' }) {
  const ref = useRef()
  const points = useMemo(() => {
    const points = []
    points.push(new THREE.Vector3(...start))
    const mid = new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2,
      (start[2] + end[2]) / 2
    )
    mid.x += (Math.random() - 0.5) * 2
    mid.y += (Math.random() - 0.5) * 2
    points.push(mid)
    points.push(new THREE.Vector3(...end))
    return points
  }, [start, end])

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points)
  }, [points])

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 20, 0.02, 8, false)
  }, [curve])

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = (Math.sin(state.clock.elapsedTime * 2) + 1.5) * 0.25
    }
  })

  return (
    <mesh geometry={geometry} ref={ref}>
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// IoT Icon component
function IoTIcon({ position }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color="#4299e1" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[0.2, 0.3, 32]} />
        <meshBasicMaterial color="#63b3ed" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

// Particle system
function Particles({ count = 100 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [count])

  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001
      ref.current.rotation.x += 0.001
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4299e1"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Main scene
function Scene() {
  const hexagonPoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      points.push([Math.cos(angle) * 3, Math.sin(angle) * 3, 0])
    }
    return points
  }, [])

  const iconPositions = useMemo(() => {
    return Array(8).fill().map(() => [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 5
    ])
  }, [])

  return (
    <>
      {/* Central hexagon circuit */}
      {hexagonPoints.map((point, i) => (
        <CircuitLine
          key={i}
          start={point}
          end={hexagonPoints[(i + 1) % hexagonPoints.length]}
        />
      ))}
      
      {/* Outer connections */}
      {hexagonPoints.map((point, i) => (
        <CircuitLine
          key={`outer-${i}`}
          start={point}
          end={[point[0] * 2, point[1] * 2, point[2]]}
          color="#2b6cb0"
        />
      ))}

      {/* IoT Icons */}
      {iconPositions.map((pos, i) => (
        <IoTIcon key={i} position={pos} />
      ))}

      {/* Background particles */}
      <Particles count={200} />

      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4299e1" transparent opacity={0.3} />
      </mesh>
    </>
  )
}

export default function CircuitAnimation() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <color attach="background" args={['#000']} />
      <Scene />
      <Environment preset="night" />
    </Canvas>
  )
}

