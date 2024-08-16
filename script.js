
// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

// Create a grid with custom magenta and golden yellow colors
const gridSize = 100;
const gridDivisions = 100;
const gridColor1 = new THREE.Color(0xff00ff); // Magenta
const gridColor2 = new THREE.Color(0xffd700); // Golden Yellow

const grid = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
grid.material.opacity = 0.5;
grid.material.transparent = true;
scene.add(grid);

// Position the camera
camera.position.z = 50;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    grid.rotation.x += 0.01;
    grid.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Function to evaluate f(n) and g(n)
function evaluateExpression(expr, n) {
    return Function('n', `return ${expr}`)(n);
}

// Function to create a 3D sphere for each node
function createNodeSphere(value, position) {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(position.x, position.y, position.z);
    scene.add(sphere);
}

// Function to generate the tree
function generateTree(position, level, n, a, b, fn, gn, depth) {
    if (level > depth || n < 1) return;

    const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

    // Create and render the node (3D sphere) at the position with the calculated value
    createNodeSphere(nodeValue, position);

    // Adjust position and generate child nodes recursively
    const offset = 2 / (level + 1); // Adjust offset for spacing
    generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
    generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
}

// Function to calculate T(n) recursively
function calculateRecurrence(n, level, a, b, fn, gn, depth) {
    if (level >= depth || n < 1) return 0;

    const fnValue = evaluateExpression(fn, n);
    const gnValue = evaluateExpression(gn, n);

    return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
}

// Function to prompt user for input
function getInputParameters() {
    const a = parseInt(prompt("Enter the coefficient a:"));
    const b = parseInt(prompt("Enter the coefficient b:"));
    const fn = prompt("Enter the function f(n):", "n");
    const gn = prompt("Enter the function g(n):", "n^2");
    const n = parseInt(prompt("Enter the value of n:"));
    const depth = parseInt(prompt("Enter the depth:"));

    return { a, b, fn, gn, n, depth };
}

// Event listener for the "Generate Tree" button
document.getElementById('generateTree').addEventListener('click', () => {
    // Get input values using prompt()
    const { a, b, fn, gn, n, depth } = getInputParameters();

    // Clear the previous tree
    scene.clear();  // Clearing all objects from the scene
    scene.add(grid);  // Re-adding the grid

    // Generate the tree from the root node
    generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
});
