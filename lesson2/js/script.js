function greet() {
    alert("ברוכים הבאים!");
}

// פונקציה עם אנימציה בגלל הסקרנות
function greet2() {
    document.getElementById('msg').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('msg').style.display = 'none';
    }, 2000);
}

function welcome() {
    console.log("ברוכים הבאים!");
}

function greetName() {
    let un = document.getElementById('userName').value;
    alert("ברוך הבא " + un);
}

function multi50() {
    let n = document.getElementById('num1').value;

    alert(n * 50);
}

function nulti() {
    let n1 = document.getElementById('num2').value;
    let n2 = document.getElementById('num3').value;

    alert(n1 * n2);
}

function sum() {
    
}