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