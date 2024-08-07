function moveZeros() {
    let inputArrayStr = document.getElementById('inputArray').value;
    let inputArray = inputArrayStr.split(',').map(item => parseInt(item.trim()));
    let count = 0;
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== 0) {
            result.push(inputArray[i]);
        } else {
            count++;
        }
    }
    while (count--) {
        result.push(0);
    }
    document.getElementById('result').textContent = 'Result: [' + result.join(', ') + ']';
}
