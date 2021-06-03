import "./css/style.css";

new fullpage("#fullpage", {
  // autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["home", "projects", "about", "contact"],
  navigationTooltips: ["home", "projects", "about", "contact"],
  showActiveTooltip: true,
  sectionsColor: ["#ed944d", "#88EFE2", "#ED944C", "#29BA7F"],
  responsiveWidth: 1000,
  slidesNavigation: true,
});

document.addEventListener("DOMContentLoaded", function (event) {
  // wait until external stylesheets, links, images, and other external assets are loaded in the window
  window.addEventListener(
    "load",
    function () {
      // custom GSAP code goes here
      const border = CSSRulePlugin.getRule(".hero-text:before");
      const h1 = document.querySelector("#name-h1");
      const h2 = document.querySelector("#title-h2");
      const tl = gsap.timeline();

      tl.from(border, { delay: 0.5, duration: 4, cssRule: { scaleX: 0 } });
      tl.to(
        h1,
        {
          duration: 2,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: "40px",
        },
        "-=3"
      );
      tl.to(
        h2,
        {
          duration: 2,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: "40px",
        },
        "-=2"
      );
    },
    false
  );
});

// import "./css/style.css";
// import * as THREE from "three";
// // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#bg"),
//   alpha: true,
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(500, 500);
// camera.position.setZ(30);
// camera.position.setX(-3);

// renderer.render(scene, camera);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// const material = new THREE.MeshBasicMaterial({
//   color: 0xff6347,
//   wireframe: true,
// });
// // const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);
// const ambientLight = new THREE.AmbientLight(0xffffff);

// scene.add(pointLight, ambientLight);

// // const controls = new OrbitControls(camera, renderer.domElement);

// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;

// function resizeCanvasToDisplaySize() {
//   const canvas = renderer.domElement;
//   // look up the size the canvas is being displayed
//   const width = canvas.clientWidth;
//   const height = canvas.clientHeight;

//   // adjust displayBuffer size to match
//   if (canvas.width !== width || canvas.height !== height) {
//     // you must pass false here or three.js sadly fights the browser
//     renderer.setSize(width, height, false);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();

//     // update any render target sizes here
//   }
// }

// function animate() {
//   resizeCanvasToDisplaySize();
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   // controls.update();

//   renderer.render(scene, camera);
// }

// animate();

// Particle Three js

import * as THREE from "three";

// Texture Loader
const loader = new THREE.TextureLoader();
const crossParticle = loader.load("./assets/particle.png");

// Canvas
const canvas = document.querySelector("#bg");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 70000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * (Math.random() * 7);
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

// Materials

const material = new THREE.PointsMaterial({ size: 0.01, color: "grey" });

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.004,
  transparent: true,
  map: crossParticle,
  color: "grey",
});

// Mesh
const sphere = new THREE.Points(geometry, material);
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(sphere, particlesMesh);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color("#ed944d"), 1);

//Mouse
const animateParticles = (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
};
document.addEventListener("mousemove", animateParticles);

let mouseX = 0;
let mouseY = 0;

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.5 * elapsedTime;
  particlesMesh.rotation.y = -0.1 * elapsedTime;

  if (mouseX > 0) {
    particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.000008);
    particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.000008);
  }
  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
