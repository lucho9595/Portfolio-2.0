import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
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
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial>
                        <RenderTexture attach="map">
                            <PerspectiveCamera
                                makeDefault
                                position={[0, 0, 2]}
                            />
                            <color attach="background" args={["pink"]} />
                            <Text>
                                hello
                            </Text>
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </Container>
    )
};