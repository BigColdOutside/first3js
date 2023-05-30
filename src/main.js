// import { OrbitControls } from 'three-orbitcontrols';

let camera, scene, renderer, cube;
function init() {
	// Init scene
	scene = new THREE.Scene();
	//hon -test
	// Init camera (PerspectiveCamera)
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	// Init renderer
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

	// Set size (whole window)
	renderer.setSize(window.innerWidth, window.innerHeight);

	// const controls = new OrbitControls(camera, renderer.domElement);
	// camera.position.set(0, 20, 100);
	// controls.update();

	// Render to canvas element
	document.body.appendChild(renderer.domElement);

	// Init BoxGeometry object (rectangular cuboid)
	const geometry = new THREE.BoxGeometry(3, 3, 3);

	// Create material with color
	// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

	// Add texture - 
	// const texture = new THREE.TextureLoader().load('/crate.gif');

	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load('crate.gif');

	// Create a basic material with the texture
	const material = new THREE.MeshBasicMaterial({ map: texture });
	// Create material with texture
	// const material = new THREE.MeshBasicMaterial({ map: texture });

	// Create mesh with geo and material
	cube = new THREE.Mesh(geometry, material);
	// Add to scene
	scene.add(cube);

	// Position camera
	camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed
function animate() {
	requestAnimationFrame(animate);

	// Rotate cube (Change values to change speed)
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;


	// required if controls.enableDamping or controls.autoRotate are set to true
	// controls.update();

	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
