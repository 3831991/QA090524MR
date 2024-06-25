function task1() {
    let x = document.getElementById('answer1').value;

    if (x == 100) {
        alert("Correct answer");
    } else {
        alert("Incorrect answer");
    }
}

function task2() {
    let n = +document.getElementById('num').value;

    if (n > 50) {
        alert("המספר גדול מ-50");
    } else if (n < 30) {
        alert("המספר קטן מ-30");
    } else {
        alert("כישלון");
    }
}