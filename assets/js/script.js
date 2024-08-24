document.getElementById('recurrenceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const relation = document.getElementById('relation').value;
    const n = parseInt(document.getElementById('n').value);
    const a0 = parseInt(document.getElementById('a0').value);
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);

    if (relation === 'T(n-x)+y') {
        generateRecurrenceTree1(n, a0, x, y);
    } else {
        generateRecurrenceTree2(n, x, y, a0);
    }
});

function generateRecurrenceTree1(n, a0, x, y) {
    const container = document.getElementById('treeContainer').querySelector('.tree');
    container.innerHTML = ''; // Clear any previous tree

    const valueMap = new Map(); // To store computed values

    function computeValue(n) {
        if (n < a0) return 0;
        if (valueMap.has(n)) return valueMap.get(n);

        const value = computeValue(n - x) + y;
        valueMap.set(n, value);
        return value;
    }

    function createNode(value, calculatedValue) {
        const node = document.createElement('div');
        node.classList.add('node');
        node.textContent = `T(${value}) = ${calculatedValue}`;
        return node;
    }

    function createBranch(parent, child) {
        const branchContainer = document.createElement('div');
        branchContainer.classList.add('branch');

        if (child) {
            const horizontalContainer = document.createElement('div');
            horizontalContainer.classList.add('branch-container');

            const horizontalLine = document.createElement('div');
            horizontalLine.classList.add('horizontal-line');

            const verticalLine = document.createElement('div');
            verticalLine.classList.add('vertical-line');

            horizontalContainer.appendChild(child);
            branchContainer.appendChild(parent);
            branchContainer.appendChild(verticalLine);
            branchContainer.appendChild(horizontalLine);
            branchContainer.appendChild(horizontalContainer);
        } else {
            branchContainer.appendChild(parent);
        }

        return branchContainer;
    }

    function buildTree(value) {
        if (value < a0) return null;

        const calculatedValue = computeValue(value);
        const node = createNode(value, calculatedValue);
        const child = buildTree(value - x);
        
        return createBranch(node, child);
    }

    const root = buildTree(n);
    container.appendChild(root);
}

function generateRecurrenceTree2(n, x, y, a0) {
    const container = document.getElementById('treeContainer').querySelector('.tree');
    container.innerHTML = ''; // Clear any previous tree

    const valuesCache = {};

    function calculateValue(n) {
        if (n in valuesCache) return valuesCache[n];

        if (n < a0) {
            valuesCache[n] = a0;
            return a0;
        }

        const leftValue = calculateValue(n - x);
        const rightValue = calculateValue(n - y);
        valuesCache[n] = leftValue + rightValue;
        return valuesCache[n];
    }

    function createNode(value) {
        const node = document.createElement('div');
        node.classList.add('node');
        node.textContent = `T(${value}): ${calculateValue(value)}`;
        return node;
    }

    function createBranch(parent, left, right) {
        const branchContainer = document.createElement('div');
        branchContainer.classList.add('branch');

        if (left || right) {
            const horizontalContainer = document.createElement('div');
            horizontalContainer.classList.add('branch-container');
            horizontalContainer.style.justifyContent = "space-between"; // Distribute left and right nodes equally

            const horizontalLine = document.createElement('div');
            horizontalLine.classList.add('horizontal-line');

            const verticalLine = document.createElement('div');
            verticalLine.classList.add('vertical-line');

            if (left) {
                const leftBranch = document.createElement('div');
                leftBranch.classList.add('branch');
                leftBranch.appendChild(left);
                horizontalContainer.appendChild(leftBranch);
            }

            if (right) {
                const rightBranch = document.createElement('div');
                rightBranch.classList.add('branch');
                rightBranch.appendChild(right);
                horizontalContainer.appendChild(rightBranch);
            }

            branchContainer.appendChild(parent);
            branchContainer.appendChild(verticalLine);
            branchContainer.appendChild(horizontalLine);
            branchContainer.appendChild(horizontalContainer);
        } else {
            branchContainer.appendChild(parent);
        }

        return branchContainer;
    }

    function buildTree(value) {
        if (value < a0) return null;

        const node = createNode(value);
        const leftBranch = buildTree(value - x);
        const rightBranch = buildTree(value - y);
        
        return createBranch(node, leftBranch, rightBranch);
    }

    const root = buildTree(n);
    container.appendChild(root);
}
