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

