function towerOfHanoi() {
    var diskNumber = document.getElementById("diskNumber").value;
    var result = document.getElementById("result");
    var moves = hanoi(diskNumber, 'A', 'C', 'B');
    result.innerText = "Minimum moves required: " + moves;
}
function hanoi(n, source, target, auxiliary) {
    if (n === 1) {
        return 1;
    } else {
        var moveAtoB = hanoi(n - 1, source, auxiliary, target);
        var moveBtoC = 1;
        var moveAtoC = hanoi(n - 1, auxiliary, target, source);
        return moveAtoB + moveBtoC + moveAtoC;
    }
}
