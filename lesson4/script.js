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

function salarycalcultor() {
    let user = document.getElementById("user").value;
    let salary = document.getElementById("salary").value;

    if (salary * 1.1 > 6000) {
        salary *= 1.05;
    } else {
        salary *= 1.1;
    }

    document.getElementById("output3").innerHTML = `השכר של ${user} הוא: ${Math.round(salary)}`;
}

function check() {
    const age = +document.getElementById("age").value;
    const height = +document.getElementById("height").value;

    // משתנה עזר
    const ageCond = (age >= 14 && age <= 18) || (age >= 21 && age <= 26);

    if (ageCond && height >= 182) {
        document.getElementById("output4").innerHTML = "התקבלת בהצלחה";
    } else {
        document.getElementById("output4").innerHTML = "לצערינו, לא התקבלת.";
    }
}