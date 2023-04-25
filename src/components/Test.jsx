import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture } from '@react-three/drei';
import styled from "styled-components";

const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

export default function Test() {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[1, 3, 5]} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial>
                        <RenderTexture>
                            <color attach="background" args={["violet"]} />
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </Container>
    )
};