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
    let n1 = +document.getElementById('num4').value;
    let n2 = +document.getElementById('num5').value;

    alert(n1 + n2);
    // אופציות נוספות (אם לא היינו ממירים למעלה למספר)
    // alert(Number(n1) + Number(n2));
    // alert(parseInt(n1) + parseInt(n2));
    // alert(+n1 + +n2);
    // alert(n1 * 1 + n2 * 1);
}