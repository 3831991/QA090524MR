// משתנה גלובלי (לצורך שמירה על הערך הקודם)
let counter = 1;

function task1() {
    counter++;

    document.getElementById("btn").innerHTML = counter;
    // מגדיל גם את הגופן
    // document.getElementById("btn").style.fontSize = (counter + 15) + "px";
}

function task2() {
    let city = document.getElementById("city").value;

    if (city == "קרית ארבע") {
        document.getElementById("output1").innerHTML = "נכון";
    } else {
        document.getElementById("output1").innerHTML = "טעות";
    }
}

function task3() {
    let url = document.getElementById("imgUrl").value;
    let alt = document.getElementById("imgAlt").value;

    document.getElementById("img").src = url;
    document.getElementById("img").alt = alt;
}

function sum() {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;

    document.getElementById("output2").innerHTML = n1 + " + " + n2 + " = " + (n1 + n2);
    // אופציה נוספת
    // document.getElementById("output2").innerHTML = `${n1} + ${n2} = ${n1 + n2}`;
}