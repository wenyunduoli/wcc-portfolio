
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);


const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 50 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 0);
scene.add(sphere);


const planeGeometry = new THREE.PlaneGeometry(10, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
scene.add(plane);


function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01;

  const time = Date.now() * 0.001;
  pointLight.position.x = Math.sin(time * 0.7) * 3;
  pointLight.position.y = Math.cos(time * 0.5) * 4;
  pointLight.position.z = Math.sin(time * 0.3) * 5;

  renderer.render(scene, camera);
}
animate();
