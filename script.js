// // // // // // // // // // // Initialize Three.js scene
// // // // // // // // // // const scene = new THREE.Scene();
// // // // // // // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // // // // // // const renderer = new THREE.WebGLRenderer();
// // // // // // // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // // // // // // // Create a grid
// // // // // // // // // // const gridSize = 100;
// // // // // // // // // // const gridDivisions = 100;
// // // // // // // // // // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // // // // // // // // // grid.material.opacity = 0.25;
// // // // // // // // // // grid.material.transparent = true;
// // // // // // // // // // scene.add(grid);

// // // // // // // // // // // Position the camera
// // // // // // // // // // camera.position.z = 50;

// // // // // // // // // // // Animation loop
// // // // // // // // // // function animate() {
// // // // // // // // // //     requestAnimationFrame(animate);
// // // // // // // // // //     grid.rotation.x += 0.01;
// // // // // // // // // //     grid.rotation.y += 0.01;
// // // // // // // // // //     renderer.render(scene, camera);
// // // // // // // // // // }
// // // // // // // // // // animate();

// // // // // // // // // // // Handle window resize
// // // // // // // // // // window.addEventListener('resize', () => {
// // // // // // // // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // // // // // // // //     camera.updateProjectionMatrix();
// // // // // // // // // // });

// // // // // // // // // // // Function to evaluate f(n) and g(n)
// // // // // // // // // // function evaluateExpression(expr, n) {
// // // // // // // // // //     try {
// // // // // // // // // //         return Function('n', `return ${expr}`)(n);
// // // // // // // // // //     } catch (e) {
// // // // // // // // // //         console.error("Error evaluating expression:", e);
// // // // // // // // // //         return 0;
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // // Function to create a 3D sphere for each node
// // // // // // // // // // function createNodeSphere(value, position) {
// // // // // // // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // // // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // // // // // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // // // // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // // // // // // //     scene.add(sphere);
// // // // // // // // // // }

// // // // // // // // // // // Function to generate the tree
// // // // // // // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // // // // // // //     if (level > depth || n < 1) return;

// // // // // // // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // // // // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // // // // // // //     createNodeSphere(nodeValue, position);

// // // // // // // // // //     // Adjust position and generate child nodes recursively
// // // // // // // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // // // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // // // // }

// // // // // // // // // // // Function to calculate T(n) recursively
// // // // // // // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // // // // // // //     if (level >= depth || n < 1) return 0;

// // // // // // // // // //     const fnValue = evaluateExpression(fn, n);
// // // // // // // // // //     const gnValue = evaluateExpression(gn, n);

// // // // // // // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // // // // // // }

// // // // // // // // // // // Event listener for the "Generate Tree" button
// // // // // // // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // // // // // // //     // Get input values using prompt()
// // // // // // // // // //     const a = parseInt(prompt("Enter coefficient a:", "2"));
// // // // // // // // // //     const b = parseInt(prompt("Enter coefficient b:", "2"));
// // // // // // // // // //     const fn = prompt("Enter function f(n) (e.g., 'n'):", "n");
// // // // // // // // // //     const gn = prompt("Enter function g(n) (e.g., 'n^2'):", "n^2");
// // // // // // // // // //     const n = parseInt(prompt("Enter value of n:", "8"));
// // // // // // // // // //     const depth = parseInt(prompt("Enter depth:", "4"));

// // // // // // // // // //     if (isNaN(a) || isNaN(b) || isNaN(n) || isNaN(depth)) {
// // // // // // // // // //         alert("Please enter valid numbers for coefficients, n, and depth.");
// // // // // // // // // //         return;
// // // // // // // // // //     }

// // // // // // // // // //     // Clear the previous tree
// // // // // // // // // //     scene.clear();  // Clearing all objects from the scene
// // // // // // // // // //     scene.add(grid);  // Re-adding the grid

// // // // // // // // // //     // Generate the tree from the root node
// // // // // // // // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // // // // // // // // });

// // // // // // // // // // Initialize Three.js scene
// // // // // // // // // const scene = new THREE.Scene();
// // // // // // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // // // // // const renderer = new THREE.WebGLRenderer();
// // // // // // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // // // // // // Create a grid
// // // // // // // // // const gridSize = 100;
// // // // // // // // // const gridDivisions = 100;
// // // // // // // // // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // // // // // // // // grid.material.opacity = 0.25;
// // // // // // // // // grid.material.transparent = true;
// // // // // // // // // scene.add(grid);

// // // // // // // // // // Position the camera
// // // // // // // // // camera.position.z = 50;

// // // // // // // // // // Animation loop
// // // // // // // // // function animate() {
// // // // // // // // //     requestAnimationFrame(animate);
// // // // // // // // //     grid.rotation.x += 0.01;
// // // // // // // // //     grid.rotation.y += 0.01;
// // // // // // // // //     renderer.render(scene, camera);
// // // // // // // // // }
// // // // // // // // // animate();

// // // // // // // // // // Handle window resize
// // // // // // // // // window.addEventListener('resize', () => {
// // // // // // // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // // // // // // //     camera.updateProjectionMatrix();
// // // // // // // // // });

// // // // // // // // // // Function to evaluate f(n) and g(n)
// // // // // // // // // function evaluateExpression(expr, n) {
// // // // // // // // //     return Function('n', `return ${expr}`)(n);
// // // // // // // // // }

// // // // // // // // // // Function to create a 3D sphere for each node
// // // // // // // // // function createNodeSphere(value, position) {
// // // // // // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // // // // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // // // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // // // // // //     scene.add(sphere);
// // // // // // // // // }

// // // // // // // // // // Function to generate the tree
// // // // // // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // // // // // //     if (level > depth || n < 1) return;

// // // // // // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // // // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // // // // // //     createNodeSphere(nodeValue, position);

// // // // // // // // //     // Adjust position and generate child nodes recursively
// // // // // // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // // // }

// // // // // // // // // // Function to calculate T(n) recursively
// // // // // // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // // // // // //     if (level >= depth || n < 1) return 0;

// // // // // // // // //     const fnValue = evaluateExpression(fn, n);
// // // // // // // // //     const gnValue = evaluateExpression(gn, n);

// // // // // // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // // // // // }

// // // // // // // // // // Event listener for the "Generate Tree" button
// // // // // // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // // // // // //     // Get input values
// // // // // // // // //     const a = parseInt(document.getElementById('a').value);
// // // // // // // // //     const b = parseInt(document.getElementById('b').value);
// // // // // // // // //     const fn = document.getElementById('fn').value;
// // // // // // // // //     const gn = document.getElementById('gn').value;
// // // // // // // // //     const n = parseInt(document.getElementById('n').value);
// // // // // // // // //     const depth = parseInt(document.getElementById('depth').value);

// // // // // // // // //     // Clear the previous tree
// // // // // // // // //     scene.clear();  // Clearing all objects from the scene
// // // // // // // // //     scene.add(grid);  // Re-adding the grid

// // // // // // // // //     // Generate the tree from the root node
// // // // // // // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // // // // // // // });

// // // // // // // // // Initialize Three.js scene
// // // // // // // // const scene = new THREE.Scene();
// // // // // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // // // // const renderer = new THREE.WebGLRenderer();
// // // // // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // // // // // Create a grid
// // // // // // // // const gridSize = 100;
// // // // // // // // const gridDivisions = 100;
// // // // // // // // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // // // // // // // grid.material.opacity = 0.25;
// // // // // // // // grid.material.transparent = true;
// // // // // // // // scene.add(grid);

// // // // // // // // // Position the camera
// // // // // // // // camera.position.z = 50;

// // // // // // // // // Animation loop
// // // // // // // // function animate() {
// // // // // // // //     requestAnimationFrame(animate);
// // // // // // // //     grid.rotation.x += 0.01;
// // // // // // // //     grid.rotation.y += 0.01;
// // // // // // // //     renderer.render(scene, camera);
// // // // // // // // }
// // // // // // // // animate();

// // // // // // // // // Handle window resize
// // // // // // // // window.addEventListener('resize', () => {
// // // // // // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // // // // // //     camera.updateProjectionMatrix();
// // // // // // // // });

// // // // // // // // // Function to evaluate f(n) and g(n)
// // // // // // // // function evaluateExpression(expr, n) {
// // // // // // // //     return Function('n', `return ${expr}`)(n);
// // // // // // // // }

// // // // // // // // // Function to create a 3D sphere for each node
// // // // // // // // function createNodeSphere(value, position) {
// // // // // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // // // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // // // // //     scene.add(sphere);
// // // // // // // // }

// // // // // // // // // Function to generate the tree
// // // // // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // // // // //     if (level > depth || n < 1) return;

// // // // // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // // // // //     createNodeSphere(nodeValue, position);

// // // // // // // //     // Adjust position and generate child nodes recursively
// // // // // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // // }

// // // // // // // // // Function to calculate T(n) recursively
// // // // // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // // // // //     if (level >= depth || n < 1) return 0;

// // // // // // // //     const fnValue = evaluateExpression(fn, n);
// // // // // // // //     const gnValue = evaluateExpression(gn, n);

// // // // // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // // // // }

// // // // // // // // // Event listener for the "Generate Tree" button
// // // // // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // // // // //     // Get input values
// // // // // // // //     const a = parseInt(document.getElementById('a').value);
// // // // // // // //     const b = parseInt(document.getElementById('b').value);
// // // // // // // //     const fn = document.getElementById('fn').value;
// // // // // // // //     const gn = document.getElementById('gn').value;
// // // // // // // //     const n = parseInt(document.getElementById('n').value);
// // // // // // // //     const depth = parseInt(document.getElementById('depth').value);

// // // // // // // //     // Clear the previous tree
// // // // // // // //     scene.clear();  // Clearing all objects from the scene
// // // // // // // //     scene.add(grid);  // Re-adding the grid

// // // // // // // //     // Generate the tree from the root node
// // // // // // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // // // // // // });

// // // // // // // // Initialize Three.js scene
// // // // // // // const scene = new THREE.Scene();
// // // // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // // // const renderer = new THREE.WebGLRenderer();
// // // // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // // // // Create a grid with custom colors
// // // // // // // const gridSize = 100;
// // // // // // // const gridDivisions = 100;
// // // // // // // const gridColor1 = new THREE.Color(0xff00ff); // First grid line color (magenta)
// // // // // // // const gridColor2 = new THREE.Color(0xffd700); // Second grid line color (golden yellow)

// // // // // // // const grid = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
// // // // // // // grid.material.opacity = 0.5;
// // // // // // // grid.material.transparent = true;
// // // // // // // scene.add(grid);

// // // // // // // // Position the camera
// // // // // // // camera.position.z = 50;

// // // // // // // // Animation loop
// // // // // // // function animate() {
// // // // // // //     requestAnimationFrame(animate);
// // // // // // //     grid.rotation.x += 0.01;
// // // // // // //     grid.rotation.y += 0.01;
// // // // // // //     renderer.render(scene, camera);
// // // // // // // }
// // // // // // // animate();

// // // // // // // // Handle window resize
// // // // // // // window.addEventListener('resize', () => {
// // // // // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // // // // //     camera.updateProjectionMatrix();
// // // // // // // });

// // // // // // // // Function to evaluate f(n) and g(n)
// // // // // // // function evaluateExpression(expr, n) {
// // // // // // //     return Function('n', `return ${expr}`)(n);
// // // // // // // }

// // // // // // // // Function to create a 3D sphere for each node
// // // // // // // function createNodeSphere(value, position) {
// // // // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // // // //     scene.add(sphere);
// // // // // // // }

// // // // // // // // Function to generate the tree
// // // // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // // // //     if (level > depth || n < 1) return;

// // // // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // // // //     createNodeSphere(nodeValue, position);

// // // // // // //     // Adjust position and generate child nodes recursively
// // // // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // }

// // // // // // // // Function to calculate T(n) recursively
// // // // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // // // //     if (level >= depth || n < 1) return 0;

// // // // // // //     const fnValue = evaluateExpression(fn, n);
// // // // // // //     const gnValue = evaluateExpression(gn, n);

// // // // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // // // }

// // // // // // // // Event listener for the "Generate Tree" button
// // // // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // // // //     // Get input values
// // // // // // //     const a = parseInt(document.getElementById('a').value);
// // // // // // //     const b = parseInt(document.getElementById('b').value);
// // // // // // //     const fn = document.getElementById('fn').value;
// // // // // // //     const gn = document.getElementById('gn').value;
// // // // // // //     const n = parseInt(document.getElementById('n').value);
// // // // // // //     const depth = parseInt(document.getElementById('depth').value);

// // // // // // //     // Clear the previous tree
// // // // // // //     scene.clear();  // Clearing all objects from the scene
// // // // // // //     scene.add(grid);  // Re-adding the grid

// // // // // // //     // Generate the tree from the root node
// // // // // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // // // // // });

// // // // // // // // Initialize Three.js scene
// // // // // // // const scene = new THREE.Scene();
// // // // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // // // const renderer = new THREE.WebGLRenderer();
// // // // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // // // // Create a grid with custom magenta and golden yellow colors
// // // // // // // const gridSize = 100;
// // // // // // // const gridDivisions = 100;
// // // // // // // const gridColor1 = new THREE.Color(0xff00ff); // Magenta
// // // // // // // const gridColor2 = new THREE.Color(0xffd700); // Golden Yellow

// // // // // // // const grid = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
// // // // // // // grid.material.opacity = 0.5;
// // // // // // // grid.material.transparent = true;
// // // // // // // scene.add(grid);

// // // // // // // // Position the camera
// // // // // // // camera.position.z = 50;

// // // // // // // // Animation loop
// // // // // // // function animate() {
// // // // // // //     requestAnimationFrame(animate);
// // // // // // //     grid.rotation.x += 0.01;
// // // // // // //     grid.rotation.y += 0.01;
// // // // // // //     renderer.render(scene, camera);
// // // // // // // }
// // // // // // // animate();

// // // // // // // // Handle window resize
// // // // // // // window.addEventListener('resize', () => {
// // // // // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // // // // //     camera.updateProjectionMatrix();
// // // // // // // });

// // // // // // // // Function to evaluate f(n) and g(n)
// // // // // // // function evaluateExpression(expr, n) {
// // // // // // //     return Function('n', `return ${expr}`)(n);
// // // // // // // }

// // // // // // // // Function to create a 3D sphere for each node
// // // // // // // function createNodeSphere(value, position) {
// // // // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // // // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // // // //     scene.add(sphere);
// // // // // // // }

// // // // // // // // Function to generate the tree
// // // // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // // // //     if (level > depth || n < 1) return;

// // // // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // // // //     createNodeSphere(nodeValue, position);

// // // // // // //     // Adjust position and generate child nodes recursively
// // // // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // // }

// // // // // // // // Function to calculate T(n) recursively
// // // // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // // // //     if (level >= depth || n < 1) return 0;

// // // // // // //     const fnValue = evaluateExpression(fn, n);
// // // // // // //     const gnValue = evaluateExpression(gn, n);

// // // // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // // // }

// // // // // // // // Function to prompt user for input
// // // // // // // function getInputParameters() {
// // // // // // //     const a = parseInt(prompt("Enter the coefficient a:"));
// // // // // // //     const b = parseInt(prompt("Enter the coefficient b:"));
// // // // // // //     const fn = prompt("Enter the function f(n):", "n");
// // // // // // //     const gn = prompt("Enter the function g(n):", "n^2");
// // // // // // //     const n = parseInt(prompt("Enter the value of n:"));
// // // // // // //     const depth = parseInt(prompt("Enter the depth:"));

// // // // // // //     return { a, b, fn, gn, n, depth };
// // // // // // // }

// // // // // // // // Event listener for the "Generate Tree" button
// // // // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // // // //     // Get input values using prompt()
// // // // // // //     const { a, b, fn, gn, n, depth } = getInputParameters();

// // // // // // //     // Clear the previous tree
// // // // // // //     scene.clear();  // Clearing all objects from the scene
// // // // // // //     scene.add(grid);  // Re-adding the grid

// // // // // // //     // Generate the tree from the root node
// // // // // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // // // // // });

// // // // // // // Include Three.js library in your HTML file
// // // // // // // <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

// // // // // // // Include Three.js library in your HTML file
// // // // // // // <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

// // // // // // // Prompt the user for the coefficient 'a'
// // // // // // const a = parseInt(prompt("Enter the coefficient a:", ""));

// // // // // // // Prompt the user for the coefficient 'b'
// // // // // // const b = parseInt(prompt("Enter the coefficient b:", ""));

// // // // // // // Ask the user if they want to use default functions for f(n) and g(n)
// // // // // // let fn = prompt("Enter the function f(n) or press OK to use the default (f(n) = n):", "n");
// // // // // // let gn = prompt("Enter the function g(n) or press OK to use the default (g(n) = n^2):", "n^2");

// // // // // // // Prompt the user for the value of n
// // // // // // const n = parseInt(prompt("Enter the value of n:", ""));

// // // // // // // Prompt the user for the depth
// // // // // // const depth = parseInt(prompt("Enter the depth:", ""));

// // // // // // // Initialize Three.js scene
// // // // // // const scene = new THREE.Scene();
// // // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // // const renderer = new THREE.WebGLRenderer();
// // // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // // document.body.appendChild(renderer.domElement);

// // // // // // // Function to evaluate f(n) and g(n)
// // // // // // function evaluateExpression(expr, n) {
// // // // // //     return Function('n', `return ${expr}`)(n);
// // // // // // }

// // // // // // // Function to create a 3D sphere for each node
// // // // // // function createNodeSphere(value, position) {
// // // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // // //     scene.add(sphere);
// // // // // // }

// // // // // // // Function to generate the tree
// // // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // // //     if (level > depth || n < 1) return;

// // // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // // //     createNodeSphere(nodeValue, position);

// // // // // //     // Adjust position and generate child nodes recursively
// // // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // // }

// // // // // // // Function to calculate T(n) recursively
// // // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // // //     if (level >= depth || n < 1) return 0;

// // // // // //     const fnValue = evaluateExpression(fn, n);
// // // // // //     const gnValue = evaluateExpression(gn, n);

// // // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // // }

// // // // // // // Generate the tree from the root node
// // // // // // generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);

// // // // // // // Set camera position
// // // // // // camera.position.z = 10;

// // // // // // // Render function
// // // // // // function animate() {
// // // // // //     requestAnimationFrame(animate);
// // // // // //     renderer.render(scene, camera);
// // // // // // }
// // // // // // animate();

// // // // // // Include Three.js library in your HTML file
// // // // // // <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

// // // // // // Prompt the user for the coefficient 'a'
// // // // // const a = parseInt(prompt("Enter the coefficient a:", ""));

// // // // // // Prompt the user for the coefficient 'b'
// // // // // const b = parseInt(prompt("Enter the coefficient b:", ""));

// // // // // // Ask the user if they want to use default functions for f(n) and g(n)
// // // // // let fn = prompt("Enter the function f(n) or press OK to use the default (f(n) = n):", "n");
// // // // // let gn = prompt("Enter the function g(n) or press OK to use the default (g(n) = n^2):", "n^2");

// // // // // // Prompt the user for the value of n
// // // // // const n = parseInt(prompt("Enter the value of n:", ""));

// // // // // // Prompt the user for the depth
// // // // // const depth = parseInt(prompt("Enter the depth:", ""));

// // // // // // Initialize Three.js scene
// // // // // const scene = new THREE.Scene();
// // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // const renderer = new THREE.WebGLRenderer();
// // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // document.body.appendChild(renderer.domElement);

// // // // // // Function to evaluate f(n) and g(n)
// // // // // function evaluateExpression(expr, n) {
// // // // //     return Function('n', `return ${expr}`)(n);
// // // // // }

// // // // // // Function to create a 3D sphere for each node
// // // // // function createNodeSphere(value, position) {
// // // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // // //     const sphere = new THREE.Mesh(geometry, material);
// // // // //     sphere.position.set(position.x, position.y, position.z);
// // // // //     scene.add(sphere);
// // // // // }

// // // // // // Function to generate the tree
// // // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // // //     if (level > depth || n < 1) return;

// // // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // // //     createNodeSphere(nodeValue, position);

// // // // //     // Adjust position and generate child nodes recursively
// // // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // // }

// // // // // // Function to calculate T(n) recursively
// // // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // // //     if (level >= depth || n < 1) return 0;

// // // // //     const fnValue = evaluateExpression(fn, n);
// // // // //     const gnValue = evaluateExpression(gn, n);

// // // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // // }

// // // // // // Generate the tree from the root node
// // // // // generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);

// // // // // // Set camera position
// // // // // camera.position.z = 10;

// // // // // // Render function
// // // // // function animate() {
// // // // //     requestAnimationFrame(animate);
// // // // //     renderer.render(scene, camera);
// // // // // }
// // // // // animate();

// // // // // Initialize Three.js scene
// // // // const scene = new THREE.Scene();
// // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // Create a grid with custom magenta and golden yellow colors
// // // // const gridSize = 100;
// // // // const gridDivisions = 100;
// // // // const gridColor1 = new THREE.Color(0xff00ff); // Magenta
// // // // const gridColor2 = new THREE.Color(0xffd700); // Golden Yellow

// // // // const grid = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
// // // // grid.material.opacity = 0.5;
// // // // grid.material.transparent = true;
// // // // scene.add(grid);

// // // // // Position the camera
// // // // camera.position.z = 50;

// // // // // Function to evaluate f(n) and g(n)
// // // // function evaluateExpression(expr, n) {
// // // //     return Function('n', `return ${expr}`)(n);
// // // // }

// // // // // Function to create a 3D sphere for each node with label
// // // // function createNodeSphere(value, position) {
// // // //     const geometry = new THREE.SphereGeometry(1, 32, 32);
// // // //     const material = new THREE.MeshBasicMaterial({ color: 0xff00ff }); // Magenta
// // // //     const sphere = new THREE.Mesh(geometry, material);

// // // //     // Add value text to the node
// // // //     const canvas = document.createElement('canvas');
// // // //     const context = canvas.getContext('2d');
// // // //     canvas.width = 128;
// // // //     canvas.height = 64;
// // // //     context.fillStyle = 'white';
// // // //     context.font = 'bold 24px Arial';
// // // //     context.textAlign = 'center';
// // // //     context.textBaseline = 'middle';
// // // //     context.fillText(value, canvas.width / 2, canvas.height / 2);

// // // //     const texture = new THREE.CanvasTexture(canvas);
// // // //     material.map = texture;
// // // //     material.needsUpdate = true; // Ensure material is updated with new texture

// // // //     sphere.position.set(position.x, position.y, position.z);
// // // //     scene.add(sphere);
// // // // }

// // // // // Function to generate the tree
// // // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // // //     if (level > depth || n < 1) return;

// // // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // //     createNodeSphere(nodeValue, position);

// // // //     // Adjust position and generate child nodes recursively
// // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // // }

// // // // // Function to calculate T(n) recursively
// // // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // // //     if (level >= depth || n < 1) return 0;

// // // //     const fnValue = evaluateExpression(fn, n);
// // // //     const gnValue = evaluateExpression(gn, n);

// // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // // }

// // // // // Function to get input values from the form
// // // // function getInputValues() {
// // // //     const a = parseInt(document.getElementById('a').value) || 1;
// // // //     const b = parseInt(document.getElementById('b').value) || 1;
// // // //     const fn = document.getElementById('fn').value || 'n';
// // // //     const gn = document.getElementById('gn').value || 'n^2';
// // // //     const n = parseInt(document.getElementById('n').value) || 1;
// // // //     const depth = parseInt(document.getElementById('depth').value) || 1;

// // // //     return { a, b, fn, gn, n, depth };
// // // // }

// // // // // Event listener for the "Generate Tree" button
// // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // //     // Get input values from the form
// // // //     const { a, b, fn, gn, n, depth } = getInputValues();

// // // //     // Clear the previous tree
// // // //     scene.clear();  // Clearing all objects from the scene
// // // //     scene.add(grid);  // Re-adding the grid

// // // //     // Generate the tree from the root node
// // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // // });

// // // // // Animation loop
// // // // function animate() {
// // // //     requestAnimationFrame(animate);
// // // //     renderer.render(scene, camera);
// // // // }
// // // // animate();

// // // // // Handle window resize
// // // // window.addEventListener('resize', () => {
// // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // //     camera.updateProjectionMatrix();
// // // // });

// // // Initialize Three.js scene
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // Create a grid with custom magenta and golden yellow colors
// // const gridSize = 100;
// // const gridDivisions = 100;
// // const gridColor1 = new THREE.Color(0xff00ff); // Magenta
// // const gridColor2 = new THREE.Color(0xffd700); // Golden Yellow

// // const grid = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
// // grid.material.opacity = 0.5;
// // grid.material.transparent = true;
// // scene.add(grid);

// // // Position the camera
// // camera.position.z = 50;

// // // Function to evaluate f(n) and g(n)
// // function evaluateExpression(expr, n) {
// //     return Function('n', `return ${expr}`)(n);
// // }

// // // Function to create a 3D sphere for each node with label
// // function createNodeSphere(value, position) {
// //     const geometry = new THREE.SphereGeometry(1, 32, 32);
// //     const material = new THREE.MeshBasicMaterial({ color: 0xff00ff }); // Magenta
// //     const sphere = new THREE.Mesh(geometry, material);

// //     // Add value text to the node
// //     const canvas = document.createElement('canvas');
// //     const context = canvas.getContext('2d');
// //     canvas.width = 128;
// //     canvas.height = 64;
// //     context.fillStyle = 'white';
// //     context.font = 'bold 24px Arial';
// //     context.textAlign = 'center';
// //     context.textBaseline = 'middle';
// //     context.fillText(value, canvas.width / 2, canvas.height / 2);

// //     const texture = new THREE.CanvasTexture(canvas);
// //     material.map = texture;
// //     material.needsUpdate = true; // Ensure material is updated with new texture

// //     sphere.position.set(position.x, position.y, position.z);
// //     scene.add(sphere);
// // }

// // // Function to generate the tree
// // function generateTree(position, level, n, a, b, fn, gn, depth) {
// //     if (level > depth || n < 1) return;

// //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// //     // Create and render the node (3D sphere) at the position with the calculated value
// //     createNodeSphere(nodeValue, position);

// //     // Adjust position and generate child nodes recursively
// //     const offset = 2 / (level + 1); // Adjust offset for spacing
// //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // }

// // // Function to calculate T(n) recursively
// // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// //     if (level >= depth || n < 1) return 0;

// //     const fnValue = evaluateExpression(fn, n);
// //     const gnValue = evaluateExpression(gn, n);

// //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // }

// // // Function to get input values from the form
// // function getInputValues() {
// //     const a = parseInt(document.getElementById('a').value) || 1;
// //     const b = parseInt(document.getElementById('b').value) || 1;
// //     const fn = document.getElementById('fn').value || 'n';
// //     const gn = document.getElementById('gn').value || 'n^2';
// //     const n = parseInt(document.getElementById('n').value) || 1;
// //     const depth = parseInt(document.getElementById('depth').value) || 1;

// //     return { a, b, fn, gn, n, depth };
// // }

// // // Event listener for the "Generate Tree" button
// // document.getElementById('generateTree').addEventListener('click', () => {
// //     // Get input values from the form
// //     const { a, b, fn, gn, n, depth } = getInputValues();

// //     // Clear the previous tree
// //     scene.clear();  // Clearing all objects from the scene
// //     scene.add(grid);  // Re-adding the grid

// //     // Generate the tree from the root node
// //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // });

// // // Animation loop
// // function animate() {
// //     requestAnimationFrame(animate);
// //     renderer.render(scene, camera);
// // }
// // animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// });

// Prompt the user for the coefficient 'a'
const a = parseInt(prompt("Enter the coefficient a:", ""));

// Prompt the user for the coefficient 'b'
const b = parseInt(prompt("Enter the coefficient b:", ""));

// Ask the user if they want to use default functions for f(n) and g(n)
let fn = prompt("Enter the function f(n) or press OK to use the default (f(n) = n):", "n");
let gn = prompt("Enter the function g(n) or press OK to use the default (g(n) = n^2):", "n^2");

// Prompt the user for the value of n
const n = parseInt(prompt("Enter the value of n:", ""));

// Prompt the user for the depth
const depth = parseInt(prompt("Enter the depth:", ""));

// // Initialize Three.js scene
// //const scene = new THREE.Scene();
// //const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //const renderer = new THREE.WebGLRenderer();
// //renderer.setSize(window.innerWidth, window.innerHeight);
// //document.body.appendChild(renderer.domElement);

// // Initialize Three.js scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ alpha: true });  // Enable transparency
// renderer.setClearColor(0x000000, 0);  // Set clear color to transparent
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);


// // Function to evaluate f(n) and g(n)
// function evaluateExpression(expr, n) {
//     return Function('n', `return ${expr}`)(n);
// }

// // Function to create a 3D sphere for each node
// function createNodeSphere(value, position) {
//     const geometry = new THREE.SphereGeometry(1, 32, 32);  // Node size retained
//     const material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Node color changed to white
//     const sphere = new THREE.Mesh(geometry, material);
//     sphere.position.set(position.x, position.y, position.z);
//     scene.add(sphere);
// }

// // Function to generate the tree
// function generateTree(position, level, n, a, b, fn, gn, depth) {
//     if (level > depth || n < 1) return;

//     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

//     // Create and render the node (3D sphere) at the position with the calculated value
//     createNodeSphere(nodeValue, position);

//     // Adjust position and generate child nodes recursively
//     const offset = 2 / (level + 1); // Adjust offset for spacing
//     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
//     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// }

// // Function to calculate T(n) recursively
// function calculateRecurrence(n, level, a, b, fn, gn, depth) {
//     if (level >= depth || n < 1) return 0;

//     const fnValue = evaluateExpression(fn, n);
//     const gnValue = evaluateExpression(gn, n);

//     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// }

// // Generate the tree from the root node
// generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);

// // Set camera position
// camera.position.z = 10;

// // Render function
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
// animate();

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });  // Enable transparency
renderer.setClearColor(0x000000, 0);  // Set clear color to transparent
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Function to evaluate f(n) and g(n)
function evaluateExpression(expr, n) {
    return Function('n', `return ${expr}`)(n);
}

// Function to create a 3D sphere for each node
function createNodeSphere(value, position) {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);  // Adjusted size
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // White color for nodes
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(position.x, position.y, position.z);
    scene.add(sphere);
    return sphere;
}

// Function to create edges (lines) between nodes
function createEdge(node1, node2) {
    const material = new THREE.LineBasicMaterial({ color: 0x888888 });  // Grey color for edges
    const points = [];
    points.push(new THREE.Vector3(node1.position.x, node1.position.y, node1.position.z));
    points.push(new THREE.Vector3(node2.position.x, node2.position.y, node2.position.z));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
}

// Function to generate the tree
function generateTree(position, level, n, a, b, fn, gn, depth, parentNode = null) {
    if (level > depth || n < 1) return;

    const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);
    const node = createNodeSphere(nodeValue, position);  // Create the node sphere

    // If there's a parent node, create an edge connecting to this node
    if (parentNode) {
        createEdge(parentNode, node);
    }

    // Adjust position and generate child nodes recursively
    const offset = 6 / (level + 1);  // Adjust offset for spacing
    generateTree({ x: position.x - offset, y: position.y - 5, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth, node);
    generateTree({ x: position.x + offset, y: position.y - 5, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth, node);
}

// Function to calculate T(n) recursively
function calculateRecurrence(n, level, a, b, fn, gn, depth) {
    if (level >= depth || n < 1) return 0;

    const fnValue = evaluateExpression(fn, n);
    const gnValue = evaluateExpression(gn, n);

    return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
}

// Generate the tree from the root node
generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);

// Set camera position
camera.position.z = 15;

// Render function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

