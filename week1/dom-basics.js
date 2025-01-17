const newP = document.createElement("p");
newP.textContent = "Hello World!";
document.body.append(newP);

console.log("is it working?");

// Step 2: add new image
const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "image");
document.body.append(img);

//Step 3: insert a whole string
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.append(newDiv);

//Step 4: Add section 
// const newSection = document.createElement("section");
// document.body.append(newSection);

// //add h2 element + text in new section
// const newH2 = document.createElement("h2");
// newH2.textContent = "DOM Basics";
// document.newSection.append(newH2);

// //add paragraph with text
// const newP2 = document.createElement("p");
// newP2.textContent = "This was added through Javascript";
// document.newSection.append(newP2);


const title = "DOM Basics";
const subtitle = "Creating elements and appending them to DOM"
const paragraph = "New Content";
const newSection = document.createElement("section");
newSection.innerHTML = `
<h2>${title}</h2>
<h3>${subtitle}</h3>
<p>${paragraph}</p>`;
document.body.append(newSection);

const ingredientData = ["Pinto Beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1 Tbsp", "8"];

//we're making a function!!!
function ingredientTemplate(index){
    return `<li>${portionData[index]} : ${ingredientData[index]}</li>`
}

const newList = document.createElement("ul");
newList.classList.add("dark");
ingredientData.forEach(function(item, index){
    newList.innerHTML += ingredientTemplate(index);
})

document.body.append(newList);