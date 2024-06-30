// משתנה גלובלי (לצורך שמירה על הערך הקודם)
let counter = 1;

function task1() {
    counter++;

    document.getElementById("btn").innerHTML = counter;
    // מגדיל גם את הגופן
    // document.getElementById("btn").style.fontSize = (counter + 15) + "px";
}