function sortedArrayToBinaryTree(arr) {
    if (arr.length === 0) {
        return 'N';
    }

    const mid = Math.floor(arr.length / 2);

    const tree = [arr[mid]];

    const leftSubtree = sortedArrayToBinaryTree(arr.slice(0, mid));
    const rightSubtree = sortedArrayToBinaryTree(arr.slice(mid + 1));

    if (leftSubtree !== 'N' || rightSubtree !== 'N') {
        tree.push(leftSubtree);
        tree.push(rightSubtree);
    }

    return tree.length === 1 ? tree[0] : tree;
}

function makeTree() {
    const inputArray = document.getElementById("inputArray").value;
    const arr = inputArray.split(",").map(Number).sort((a, b) => a - b);

    const binaryTree = sortedArrayToBinaryTree(arr);
    const result = JSON.stringify(binaryTree).replace(/"N"/g, 'N');

    document.getElementById("result").innerText = result;
}
