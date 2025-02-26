import recipes from "./recipes.js";

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
  const index = getRandomNumber(recipes.length);
  return recipes[index];
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = getRandomNumber(listLength); 
	return list[randomNum];
}


function recipeTemplate(recipe) {
	return `<main>
    <div class="recipe-container">
      <img src="${recipe.image}" alt="Image of ${recipe.name} recipe" class="recipe-img" />

      <div class="recipe">
        ${tagsTemplate(recipe.tags)}
        <h2 class="recipe-title">${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
          <p class="recipe-paragraph">
            ${recipe.description}
          </p>
      </div>
    </div>
</main>`;
}


function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = '';
	tags.forEach(tag => {
		html += `<a href="#" class="recipe-tag">${tag.toLowerCase()}</a>`;
	});
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`; // Filled star
		// else output an empty star
        } else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`; // Empty star
		}
	}


	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeOutputElement = document.getElementById('recipe-output');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
	// Set the HTML strings as the innerHTML of our output element.
    recipeOutputElement.innerHTML = recipesHTML;
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
      return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
        (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)))
      );
    });

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  function searchHandler(e) {
    e.preventDefault(); 

    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.toLowerCase(); //lowercase
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  }
  
  //search button event listener
  document.querySelector('.search-box button').addEventListener('click', searchHandler);
  
  // Initialize the page with a random recipe
  document.addEventListener("DOMContentLoaded", () => {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
  });  

// function init() {
//   // get a random recipe
//   const recipe = getRandomListEntry(recipes)
//   // render the recipe with renderRecipes.
//   renderRecipes([recipe]);
// }
// init();



// to test
// const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));
