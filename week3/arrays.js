//  arrays.js
const steps = ["one", "two", "three"];

function listTemplate(step){
    return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("")// set the innerHTML

const grades = ['A', 'B', 'A'];

function convertToGpaPoints(grade){
    grade = grade.toUpperCase();
    switch (grade){
        case "A":
            return 4.0;
            break;
        case "B":
            return 3.0;
            break;
        case "C":
            return 2.0;
            break;
        default:
            return 0.0;
    }
}

const gpaPoints = grades.map(convertToGpaPoints);
console.log(gpaPoints);

function sum(total, current) {
    return total + current;
}

const gpaTotal = gpaPoints.reduce(sum, 0)
console.log(gpaTotal);

const gpa = gpaTotal/gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter(function(item) {
    return item.length < 6;
});
console.log(shortFruits);

const array1 = [12, 34,21, 54];
const luckyNumber = 21;

const hasLuckyNumber = array1.indexOf(luckyNumber);
console.log(hasLuckyNumber);