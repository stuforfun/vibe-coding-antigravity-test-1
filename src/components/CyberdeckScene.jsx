import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, OrbitControls, Edges } from '@react-three/drei'

const Core = ({ mode }) => {
    const mesh = useRef()
    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.5
        mesh.current.rotation.y += delta * 0.2
    })

    const color = mode === 'Cyberdeck' ? '#00f0ff' : '#555555'

    return (
        <Icosahedron args={[1.5, 0]} ref={mesh}>
            {/* Inner translucent mesh */}
            <meshBasicMaterial color={color} transparent opacity={0.05} />
            {/* Neon Edges */}
            <Edges
                scale={1.0}
                threshold={15} // Display edges only when angle > 15
                color={color}
            />
        </Icosahedron>
    )
}

const CyberdeckScene = ({ mode }) => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: 'transparent' }}>
            <Canvas camera={{ position: [0, 0, 4] }} gl={{ alpha: true }} onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <Core mode={mode} />
            </Canvas>
        </div>
    )
}

export default CyberdeckScene
