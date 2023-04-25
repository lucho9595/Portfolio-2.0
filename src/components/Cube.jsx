import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

export default function Cube() {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, width / height, 0.01, 1000)
        scene.add(camera);
        camera.position.z = 6;
        camera.position.x = 6;

        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0x0f2c64 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.lookAt(cube.position);

        const ambientLight = new THREE.AmbientLight(0x404040, 5);
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xff0000, 10);
        pointLight.position.set(8, 8, 8);
        scene.add(pointLight)

        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            cube.rotation.y = elapsedTime
            cube.rotation.x = elapsedTime
            cube.position.y = Math.sin(elapsedTime)
            controls.update();
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()

        return () => {
            currentRef.removeChild(renderer.domElement)
        }
    }, [])

    return (
        <Container>
            <div
                ref={mountRef}
                style={{ width: "100%", height: "100vh" }}
            >
            </div>
        </Container>
        // <mesh>
        //     <boxGeometry args={[2, 2, 2]} />
        //     <meshStandardMaterial>
        //         <RenderTexture attach="map">
        //             <PerspectiveCamera
        //                 makeDefault
        //                 position={[0, 0, 2]}
        //             />
        //             <color attach="background" args={["pink"]} />
        //             <Text fontSize={1} color="#000000">

        //                 hello
        //             </Text>
        //         </RenderTexture>
        //     </meshStandardMaterial>
        // </mesh>
    )
};