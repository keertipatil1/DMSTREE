// // // // // // // Function to evaluate f(n) and g(n)
// // // // // // function evaluateExpression(expr, n) {
// // // // // //   return Function('n', `return ${expr}`)(n);
// // // // // // }

// // // // // // // Event listener for the "Generate Tree" button
// // // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // // //   // Get input values
// // // // // //   const a = parseInt(document.getElementById('a').value);
// // // // // //   const b = parseInt(document.getElementById('b').value);
// // // // // //   const fn = document.getElementById('fn').value;
// // // // // //   const gn = document.getElementById('gn').value;
// // // // // //   const n = parseInt(document.getElementById('n').value);
// // // // // //   const depth = parseInt(document.getElementById('depth').value);

// // // // // //   // Function to calculate T(n) recursively
// // // // // //   function calculateRecurrence(n, level) {
// // // // // //       if (level >= depth || n < 1) return 0;

// // // // // //       const fnValue = evaluateExpression(fn, n);
// // // // // //       const gnValue = evaluateExpression(gn, n);

// // // // // //       return a * calculateRecurrence(Math.floor(n / b), level + 1) + fnValue + gnValue;
// // // // // //   }

// // // // // //   // Clear the previous tree
// // // // // //   const treeContainer = document.getElementById('tree-container');
// // // // // //   treeContainer.innerHTML = '';

// // // // // //   // Generate the tree (placeholder for 3D rendering logic)
// // // // // //   function generateTree(position, level, n) {
// // // // // //       if (level > depth || n < 1) return;

// // // // // //       const nodeValue = calculateRecurrence(n, level);

// // // // // //       // Create and render the node (3D sphere) at the position with the calculated value
// // // // // //       console.log('Node Value at Level', level, 'with n =', n, ':', nodeValue);

// // // // // //       // Adjust position and generate child nodes recursively
// // // // // //       const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // // //       generateTree({ x: position.x - offset, y: position.y - 1 }, level + 1, Math.floor(n / b));
// // // // // //       generateTree({ x: position.x + offset, y: position.y - 1 }, level + 1, Math.floor(n / b));
// // // // // //   }

// // // // // //   // Start generating the tree from the root node
// // // // // //   generateTree({ x: 0, y: 0 }, 0, n);
// // // // // // });

// // // // // // Initialize Three.js scene
// // // // // const scene = new THREE.Scene();
// // // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // // const renderer = new THREE.WebGLRenderer();
// // // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // // Create a grid
// // // // // const gridSize = 100;
// // // // // const gridDivisions = 100;
// // // // // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // // // // grid.material.opacity = 0.25;
// // // // // grid.material.transparent = true;
// // // // // scene.add(grid);

// // // // // // Position the camera
// // // // // camera.position.z = 50;

// // // // // // Animation loop
// // // // // function animate() {
// // // // //     requestAnimationFrame(animate);
// // // // //     grid.rotation.x += 0.01;
// // // // //     grid.rotation.y += 0.01;
// // // // //     renderer.render(scene, camera);
// // // // // }
// // // // // animate();

// // // // // // Handle window resize
// // // // // window.addEventListener('resize', () => {
// // // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // // //     camera.updateProjectionMatrix();
// // // // // });

// // // // // // Function to evaluate f(n) and g(n)
// // // // // function evaluateExpression(expr, n) {
// // // // //     return Function('n', `return ${expr}`)(n);
// // // // // }

// // // // // // Event listener for the "Generate Tree" button
// // // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // // //     // Get input values
// // // // //     const a = parseInt(document.getElementById('a').value);
// // // // //     const b = parseInt(document.getElementById('b').value);
// // // // //     const fn = document.getElementById('fn').value;
// // // // //     const gn = document.getElementById('gn').value;
// // // // //     const n = parseInt(document.getElementById('n').value);
// // // // //     const depth = parseInt(document.getElementById('depth').value);

// // // // //     // Function to calculate T(n) recursively
// // // // //     function calculateRecurrence(n, level) {
// // // // //         if (level >= depth || n < 1) return 0;

// // // // //         const fnValue = evaluateExpression(fn, n);
// // // // //         const gnValue = evaluateExpression(gn, n);

// // // // //         return a * calculateRecurrence(Math.floor(n / b), level + 1) + fnValue + gnValue;
// // // // //     }

// // // // //     // Clear the previous tree
// // // // //     const treeContainer = document.getElementById('tree-container');
// // // // //     treeContainer.innerHTML = '';

// // // // //     // Generate the tree (placeholder for 3D rendering logic)
// // // // //     function generateTree(position, level, n) {
// // // // //         if (level > depth || n < 1) return;

// // // // //         const nodeValue = calculateRecurrence(n, level);

// // // // //         // Create and render the node (3D sphere) at the position with the calculated value
// // // // //         console.log('Node Value at Level', level, 'with n =', n, ':', nodeValue);

// // // // //         // Adjust position and generate child nodes recursively
// // // // //         const offset = 2 / (level + 1); // Adjust offset for spacing
// // // // //         generateTree({ x: position.x - offset, y: position.y - 1 }, level + 1, Math.floor(n / b));
// // // // //         generateTree({ x: position.x + offset, y: position.y - 1 }, level + 1, Math.floor(n / b));
// // // // //     }

// // // // //     // Start generating the tree from the root node
// // // // //     generateTree({ x: 0, y: 0 }, 0, n);
// // // // // });

// // // // // Initialize Three.js scene
// // // // const scene = new THREE.Scene();
// // // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // // const renderer = new THREE.WebGLRenderer();
// // // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // // Create a grid
// // // // const gridSize = 100;
// // // // const gridDivisions = 100;
// // // // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // // // grid.material.opacity = 0.25;
// // // // grid.material.transparent = true;
// // // // scene.add(grid);

// // // // // Position the camera
// // // // camera.position.z = 50;

// // // // // Animation loop
// // // // function animate() {
// // // //     requestAnimationFrame(animate);
// // // //     grid.rotation.x += 0.01;
// // // //     grid.rotation.y += 0.01;
// // // //     renderer.render(scene, camera);
// // // // }
// // // // animate();

// // // // // Handle window resize
// // // // window.addEventListener('resize', () => {
// // // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // //     camera.aspect = window.innerWidth / window.innerHeight;
// // // //     camera.updateProjectionMatrix();
// // // // });

// // // // // Function to evaluate f(n) and g(n)
// // // // function evaluateExpression(expr, n) {
// // // //     return Function('n', `return ${expr}`)(n);
// // // // }

// // // // // Function to create a 3D sphere for each node
// // // // function createNodeSphere(value, position) {
// // // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // // //     const sphere = new THREE.Mesh(geometry, material);
// // // //     sphere.position.set(position.x, position.y, position.z);
// // // //     scene.add(sphere);

// // // //     // Add value text (Optional, requires text rendering setup)
// // // //     // const sprite = createTextSprite(value.toString());
// // // //     // sprite.position.set(position.x, position.y, position.z + 1);
// // // //     // scene.add(sprite);
// // // // }

// // // // // Function to generate the tree
// // // // function generateTree(position, level, n) {
// // // //     if (level > depth || n < 1) return;

// // // //     const nodeValue = calculateRecurrence(n, level);

// // // //     // Create and render the node (3D sphere) at the position with the calculated value
// // // //     createNodeSphere(nodeValue, position);

// // // //     // Adjust position and generate child nodes recursively
// // // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b));
// // // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b));
// // // // }

// // // // // Function to calculate T(n) recursively
// // // // function calculateRecurrence(n, level) {
// // // //     if (level >= depth || n < 1) return 0;

// // // //     const fnValue = evaluateExpression(fn, n);
// // // //     const gnValue = evaluateExpression(gn, n);

// // // //     return a * calculateRecurrence(Math.floor(n / b), level + 1) + fnValue + gnValue;
// // // // }

// // // // // Event listener for the "Generate Tree" button
// // // // document.getElementById('generateTree').addEventListener('click', () => {
// // // //     // Get input values
// // // //     const a = parseInt(document.getElementById('a').value);
// // // //     const b = parseInt(document.getElementById('b').value);
// // // //     const fn = document.getElementById('fn').value;
// // // //     const gn = document.getElementById('gn').value;
// // // //     const n = parseInt(document.getElementById('n').value);
// // // //     const depth = parseInt(document.getElementById('depth').value);

// // // //     // Clear the previous tree
// // // //     const treeContainer = document.getElementById('tree-container');
// // // //     treeContainer.innerHTML = '';

// // // //     // Generate the tree from the root node
// // // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n);
// // // // });

// // // // Initialize Three.js scene
// // // const scene = new THREE.Scene();
// // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // const renderer = new THREE.WebGLRenderer();
// // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // // Create a grid
// // // const gridSize = 100;
// // // const gridDivisions = 100;
// // // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // // grid.material.opacity = 0.25;
// // // grid.material.transparent = true;
// // // scene.add(grid);

// // // // Position the camera
// // // camera.position.z = 50;

// // // // Animation loop
// // // function animate() {
// // //     requestAnimationFrame(animate);
// // //     grid.rotation.x += 0.01;
// // //     grid.rotation.y += 0.01;
// // //     renderer.render(scene, camera);
// // // }
// // // animate();

// // // // Handle window resize
// // // window.addEventListener('resize', () => {
// // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // //     camera.aspect = window.innerWidth / window.innerHeight;
// // //     camera.updateProjectionMatrix();
// // // });

// // // // Function to evaluate f(n) and g(n)
// // // function evaluateExpression(expr, n) {
// // //     return Function('n', `return ${expr}`)(n);
// // // }

// // // // Function to create a 3D sphere for each node
// // // function createNodeSphere(value, position) {
// // //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// // //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// // //     const sphere = new THREE.Mesh(geometry, material);
// // //     sphere.position.set(position.x, position.y, position.z);
// // //     scene.add(sphere);
// // // }

// // // // Function to generate the tree
// // // function generateTree(position, level, n, a, b, fn, gn, depth) {
// // //     if (level > depth || n < 1) return;

// // //     const nodeValue = calculateRecurrence(n, level, a, b, fn, gn, depth);

// // //     // Create and render the node (3D sphere) at the position with the calculated value
// // //     createNodeSphere(nodeValue, position);

// // //     // Adjust position and generate child nodes recursively
// // //     const offset = 2 / (level + 1); // Adjust offset for spacing
// // //     generateTree({ x: position.x - offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // //     generateTree({ x: position.x + offset, y: position.y - 1, z: position.z }, level + 1, Math.floor(n / b), a, b, fn, gn, depth);
// // // }

// // // // Function to calculate T(n) recursively
// // // function calculateRecurrence(n, level, a, b, fn, gn, depth) {
// // //     if (level >= depth || n < 1) return 0;

// // //     const fnValue = evaluateExpression(fn, n);
// // //     const gnValue = evaluateExpression(gn, n);

// // //     return a * calculateRecurrence(Math.floor(n / b), level + 1, a, b, fn, gn, depth) + fnValue + gnValue;
// // // }

// // // // Event listener for the "Generate Tree" button
// // // document.getElementById('generateTree').addEventListener('click', () => {
// // //     // Get input values
// // //     const a = parseInt(document.getElementById('a').value);
// // //     const b = parseInt(document.getElementById('b').value);
// // //     const fn = document.getElementById('fn').value;
// // //     const gn = document.getElementById('gn').value;
// // //     const n = parseInt(document.getElementById('n').value);
// // //     const depth = parseInt(document.getElementById('depth').value);

// // //     // Clear the previous tree
// // //     scene.clear();  // Clearing all objects from the scene
// // //     scene.add(grid);  // Re-adding the grid

// // //     // Generate the tree from the root node
// // //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // // });

// // // Initialize Three.js scene
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.getElementById('background-canvas').appendChild(renderer.domElement);

// // // Create a grid
// // const gridSize = 100;
// // const gridDivisions = 100;
// // const grid = new THREE.GridHelper(gridSize, gridDivisions);
// // grid.material.opacity = 0.25;
// // grid.material.transparent = true;
// // scene.add(grid);

// // // Position the camera
// // camera.position.z = 50;

// // // Animation loop
// // function animate() {
// //     requestAnimationFrame(animate);
// //     grid.rotation.x += 0.01;
// //     grid.rotation.y += 0.01;
// //     renderer.render(scene, camera);
// // }
// // animate();

// // // Handle window resize
// // window.addEventListener('resize', () => {
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// // });

// // // Function to evaluate f(n) and g(n)
// // function evaluateExpression(expr, n) {
// //     try {
// //         return Function('n', `return ${expr}`)(n);
// //     } catch (e) {
// //         console.error("Error evaluating expression:", e);
// //         return 0;
// //     }
// // }

// // // Function to create a 3D sphere for each node
// // function createNodeSphere(value, position) {
// //     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
// //     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// //     const sphere = new THREE.Mesh(geometry, material);
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

// // // Event listener for the "Generate Tree" button
// // document.getElementById('generateTree').addEventListener('click', () => {
// //     // Get input values using prompt()
// //     const a = parseInt(prompt("Enter coefficient a:", "2"));
// //     const b = parseInt(prompt("Enter coefficient b:", "2"));
// //     const fn = prompt("Enter function f(n) (e.g., 'n'):", "n");
// //     const gn = prompt("Enter function g(n) (e.g., 'n^2'):", "n^2");
// //     const n = parseInt(prompt("Enter value of n:", "8"));
// //     const depth = parseInt(prompt("Enter depth:", "4"));

// //     if (isNaN(a) || isNaN(b) || isNaN(n) || isNaN(depth)) {
// //         alert("Please enter valid numbers for coefficients, n, and depth.");
// //         return;
// //     }

// //     // Clear the previous tree
// //     scene.clear();  // Clearing all objects from the scene
// //     scene.add(grid);  // Re-adding the grid

// //     // Generate the tree from the root node
// //     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// // });

// // Initialize Three.js scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('background-canvas').appendChild(renderer.domElement);

// // Create a grid
// const gridSize = 100;
// const gridDivisions = 100;
// const grid = new THREE.GridHelper(gridSize, gridDivisions);
// grid.material.opacity = 0.25;
// grid.material.transparent = true;
// scene.add(grid);

// // Position the camera
// camera.position.z = 50;

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     grid.rotation.x += 0.01;
//     grid.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// });

// // Function to evaluate f(n) and g(n)
// function evaluateExpression(expr, n) {
//     try {
//         return Function('n', `return ${expr}`)(n);
//     } catch (e) {
//         console.error("Error evaluating expression:", e);
//         return 0;
//     }
// }

// // Function to create a 3D sphere for each node
// function createNodeSphere(value, position) {
//     const geometry = new THREE.SphereGeometry(0.5, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
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

// // Event listener for the "Generate Tree" button
// document.getElementById('generateTree').addEventListener('click', () => {
//     // Get input values using prompt()
//     const a = parseInt(prompt("Enter coefficient a:", "2"));
//     const b = parseInt(prompt("Enter coefficient b:", "2"));
//     const fn = prompt("Enter function f(n) (e.g., 'n'):", "n");
//     const gn = prompt("Enter function g(n) (e.g., 'n^2'):", "n^2");
//     const n = parseInt(prompt("Enter value of n:", "8"));
//     const depth = parseInt(prompt("Enter depth:", "4"));

//     // Validate the inputs to ensure all are numbers where applicable
//     if (isNaN(a) || isNaN(b) || isNaN(n) || isNaN(depth)) {
//         alert("Please enter valid numbers for coefficients, n, and depth.");
//         return;
//     }

//     // Clear the previous tree
//     scene.clear();  // Clearing all objects from the scene
//     scene.add(grid);  // Re-adding the grid

//     // Generate the tree from the root node
//     generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
// });

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

// Create a grid
const gridSize = 100;
const gridDivisions = 100;
const grid = new THREE.GridHelper(gridSize, gridDivisions);
grid.material.opacity = 0.25;
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
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
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

// Event listener for the "Generate Tree" button
document.getElementById('generateTree').addEventListener('click', () => {
    // Get input values using prompt()
    const a = parseInt(prompt("Enter coefficient a:", "2"));
    const b = parseInt(prompt("Enter coefficient b:", "2"));
    const fn = prompt("Enter function f(n) (e.g., 'n'):", "n");
    const gn = prompt("Enter function g(n) (e.g., 'n^2'):", "n^2");
    const n = parseInt(prompt("Enter value of n:", "8"));
    const depth = parseInt(prompt("Enter depth:", "4"));

    // Clear the previous tree
    scene.clear();  // Clearing all objects from the scene
    scene.add(grid);  // Re-adding the grid

    // Generate the tree from the root node
    generateTree({ x: 0, y: 0, z: 0 }, 0, n, a, b, fn, gn, depth);
});

