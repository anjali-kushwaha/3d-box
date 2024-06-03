import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry(1,1,1);
// const geometry = new THREE.CapsuleGeometry(1,1,20,8);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
const cube = new THREE.Line(geometry, material);

scene.add(cube);

camera.position.z = 5;

let flag = true;
animate();

// Animation loop
function animate() {
    if (cube.position.x > 5) {
        flag = false;
    } else if (cube.position.x < -5) {
        flag = true;
    }

    if (flag) {
        cube.position.x += 0.1;
    } else {
        cube.position.x -= 0.1;
    }

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

