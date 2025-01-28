const pi = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * pi;

console.log('Area1: ', area)

radius = 4;
area = radius * radius * pi;
console.log('Area2: ', area);

function circleArea(radius){
    const area = radius * pi;
    return area;
}

area = circleArea(4);
console.log('Area3: ', area);